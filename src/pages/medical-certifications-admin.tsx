import { api } from "@/api";
import { Pagination } from "@/components/Pagination";
import { Select } from "@/components/Select";
import { Button } from "@/components/ui";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import {
  ACCESS_TYPES,
  CERTIFICATION_STATUS_LIST,
  getColorByStatus,
  getListValue,
  getReadableDate,
  getSelectList,
  HandleMedicalCertificationChange,
  ITEMS_PER_PAGE,
  List,
  MedicalCertificationResponse,
  RefillPayloadValue,
  Students,
  withSession,
} from "@/shared";
import { selectors as certificationSelectors } from "@/shared/store/stores/medical-certifications-admin-store";
import { selectors as paginationSelectors } from "@/shared/store/stores/pagination-store";
import {
  getMedicalCertificationAdminData,
  refillMedicalCertificationAdminData,
  clearMedicalCertificationAdminData,
} from "@/shared/store/stores/medical-certifications-admin-store/actions";
import { useQuery } from "@tanstack/react-query";
import { useFormik } from "formik";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPagination } from "@/shared/store/stores/pagination-store/actions";

export default function Admin() {
  const dispatch = useDispatch();
  const { toast } = useToast();

  const { groupId, studentId, statuses } = useSelector(
    certificationSelectors.getMedicalCertificationAdmin()
  );

  const paginationStore = useSelector(paginationSelectors.getPagination());

  const { handleSubmit } = useFormik({
    initialValues: { groupId, studentId },
    isInitialValid: false,
    enableReinitialize: true,
    onSubmit: async () => {
      try {
        const payload = statuses.map(({ id, status }) => ({
          id,
          status: status,
        }));

        const response = await api.resolveMedicalCertifications(payload);

        if (response) {
          toast({
            title: "Success",
            description: "Medical certifications have been updated",
            variant: "positive",
          });
        }
        dispatch(clearMedicalCertificationAdminData.success(null));
      } catch (e) {
        toast({
          title: "Error",
          description: "Couldn't resolve medical certifications",
          variant: "destructive",
        });
        console.log(e);
      }
    },
  });

  const { data: groupsData } = useQuery<{
    data: {
      data: List[];
    };
  }>({
    queryKey: ["groups"],
    queryFn: api.getGroups(),
  });

  const groups = getSelectList(groupsData?.data.data || []);

  const { data: studentData } = useQuery<{
    data: Students;
  }>({
    queryKey: ["students", groupId],
    queryFn: api.getStudents(+groupId),
    enabled: !!groups.length,
  });

  const students = getSelectList(
    studentData?.data.data.map(({ id, account }) => ({
      id,
      name: `${account.name} ${account.surname}`,
    })) || []
  );

  const { data: medicalCertificationsData } = useQuery<{
    data: MedicalCertificationResponse[];
  }>({
    queryKey: ["certifications", studentId],
    queryFn: api.getMedicalCertifications(+studentId),
    enabled: !!groupId && !!studentId,
  });

  useEffect(() => {
    const newCertifications: RefillPayloadValue[] =
      medicalCertificationsData?.data.map((el) => ({
        id: el.id,
        status: el.status,
      })) || [];

    const totalPages = Math.ceil(
      (medicalCertificationsData?.data.length || 0) / ITEMS_PER_PAGE
    );

    dispatch(getPagination.success({ name: "totalPages", value: totalPages }));

    dispatch(
      refillMedicalCertificationAdminData.success({
        name: "statuses",
        value: newCertifications || [],
      })
    );
  }, [medicalCertificationsData?.data, dispatch]);

  const handleChange: HandleMedicalCertificationChange = (name, value) => {
    dispatch(getMedicalCertificationAdminData.success({ name, value }));
  };

  const handleStatusChange = (id: number) => (name: string, status: string) => {
    const value = { id, status };
    dispatch(getMedicalCertificationAdminData.success({ name, value }));
  };

  const handlePaginationChange: any = (name: string, value: number) => {
    if (value <= 0 || value > paginationStore.totalPages) {
      return;
    }
    dispatch(getPagination.success({ name, value }));
  };

  const groupValue = getListValue(groups, groupId);
  const studentValue = getListValue(students, studentId);

  const dataToShow = medicalCertificationsData?.data.slice(
    (paginationStore.activePage - 1) * ITEMS_PER_PAGE,
    paginationStore.activePage * ITEMS_PER_PAGE
  );

  return (
    <form
      className="flex justify-center items-center flex-col w-[285px] gap-5"
      onSubmit={handleSubmit}
    >
      <Select
        label="Group"
        state="groupId"
        items={groups}
        value={groupValue}
        handleChange={handleChange}
      />
      <Select
        label="Student"
        state="studentId"
        items={students}
        value={studentValue}
        handleChange={handleChange}
        disabled={!groupValue}
      />
      <div className="flex flex-col w-full gap-2">
        {dataToShow?.map(
          (
            {
              id,
              picture,
              originalName,
              status,
              description,
              startDate: _startDate,
              endDate: _endDate,
            },
            idx: number
          ) => {
            const selectedStatus = statuses
              ? statuses?.find((status) => status.id === id)?.status
              : status;

            const startDate = getReadableDate(_startDate);
            const endDate = getReadableDate(_endDate);

            return (
              <div
                key={idx}
                className="flex flex-col gap-2 border border-slate-800 rounded-md px-3 py-3"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col gap-1">
                    <Label>Description</Label>
                    <span className="text-sm text-wrap overflow-hidden break-words">
                      {description}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <Label>Start date</Label>
                    <span className="text-sm">{startDate}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <Label>End date</Label>
                    <span className="text-sm">{endDate}</span>
                  </div>
                </div>
                <a
                  href={`data:image/png;base64,${picture}`}
                  download={`certification-${idx}`}
                  className="flex flex-col gap-"
                >
                  <Label>Certificate</Label>
                  <div className="flex justify-between">
                    <span className="underline self-center text-ellipsis overflow-hidden max">
                      {originalName}
                    </span>
                    <Select
                      items={CERTIFICATION_STATUS_LIST}
                      state="statuses"
                      handleChange={handleStatusChange(id)}
                      label="Status"
                      withTopLabel={false}
                      width="w-[120px]"
                      defaultValue={"defaultValue"}
                      value={selectedStatus}
                      paintItems={getColorByStatus}
                      containerWidth=""
                    />
                  </div>
                </a>
              </div>
            );
          }
        )}
        {dataToShow?.length && (
          <Pagination
            activePage={paginationStore.activePage}
            totalPages={paginationStore.totalPages}
            handleChange={handlePaginationChange}
          />
        )}
      </div>
      {!!statuses.length && (
        <Button variant="outline" className="w-full">
          Submit
        </Button>
      )}
    </form>
  );
}

export const getServerSideProps = withSession(
  async function ({ req, res }) {
    return { props: {} };
  },
  [ACCESS_TYPES.STUDENT]
);
