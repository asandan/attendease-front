import { Breadcrumb } from "@/components/Breadcrumbs";
import { MedicalCertificationForm } from "@/components/Forms";
import { SEOHead } from "@/components/SEO";
import { WithBreadcrumbs } from "@/components/WithBreadcrumbs";
import { withSession } from "@/shared";

export default function MedicalCertifications() {
  return (
    <>
      <SEOHead
        desc="Upload medical certification and get approval by reason."
        title="Absense reason"
      />
      <WithBreadcrumbs
        href="/medical-certifications"
        label="Absence reason"
      >
        <div className="flex justify-center items-center h-full">
          <MedicalCertificationForm />
        </div>
      </WithBreadcrumbs>
    </>
  );
}

export const getServerSideProps = withSession(async function ({ req, res }) {
  return { props: {} };
});
