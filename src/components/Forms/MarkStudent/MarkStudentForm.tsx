import { api } from "@/api";
import { Select } from "@/components/Select";
import { Button } from "@/components/ui";
import { useToast } from "@/components/ui/use-toast";
import { getListValue, getSelectList, HandleChange } from "@/shared";
import { actions, selectors } from "@/shared/store/stores/mark-student-store";
import { useQuery } from "@tanstack/react-query";
import { useFormik } from "formik";
import { useSession } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";

export const MarkStudentForm = () => {
  const dispatch = useDispatch();
  const { toast } = useToast();
  const { studentId, groupId } = useSelector(selectors.getMarkStudent());
  const session = useSession() as any;

  const teacherId = session.data.user.id;

  const handleChange: HandleChange = (name, value) => {
    dispatch(actions.getMarkStudentData.success({ name, value }));
  };

  const { data: groupData } = useQuery({
    queryFn: api.getGroups(0, 1000, teacherId),
    queryKey: ["mark-group"],
  });

  const groups = getSelectList(groupData?.data?.data || []);
  const groupValue = getListValue(groups, `${groupId}`);

  const { data: _studentData } = useQuery({
    queryFn: api.getStudents(groupId as number, 0, 1000),
    queryKey: ["mark-student", groupValue],
  });

  const studentData = (_studentData?.data?.data || [])?.map((el: any) => {
    return {
      value: el.id,
      label: `${el.account.name} ${el.account.surname}`,
    };
  });

  const { handleSubmit } = useFormik({
    initialValues: {},
    onSubmit: async () => {
      try {
        const response = await api.markMyself(studentId as number)();
        if (response) {
          toast({
            title: "Success",
            description: "Student has been marked as attended",
            variant: "positive",
          });
        } else {
          toast({
            title: "Error",
            description: "Couldn't mark student",
            variant: "destructive",
          });
        }
      } catch (e: any) {
        console.log(e);
        toast({
          title: "Error",
          description: `Couldn't mark student: ${e.response.data.message}`,
          variant: "destructive",
        });
      }
    },
  });

  const students = getSelectList(studentData || []);
  const studentValue = getListValue(students, `${studentId}`);

  const isValid = groupValue && studentValue;

  return (
    <form className="flex flex-col items-center w-[23%] gap-5" onSubmit={handleSubmit}>
      <Select
        items={groups}
        handleChange={handleChange}
        state="groupId"
        label="Group"
        value={groupValue}
      />
      <Select
        items={students}
        handleChange={handleChange}
        state="studentId"
        disabled={!groupValue}
        label="Student"
        value={studentValue}
      />
      <Button
        type="submit"
        variant="outline"
        className="w-full"
        disabled={!isValid}
      >
        Submit
      </Button>
    </form>
  );
};
