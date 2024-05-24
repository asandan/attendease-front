import { MedicalCertificationsAdminForm } from "@/components/Forms/MedicalCertificationsAdmin/MedicalCertificationAdminForm";
import { SEOHead } from "@/components/SEO";
import { WithBreadcrumbs } from "@/components/WithBreadcrumbs";
import { withSession } from "@/shared";

export default function MedicalCertificationAdmin() {
  return (
    <>
      <SEOHead
        desc="Approve or reject medical certifications for students."
        title="Medical certitications"
      />
      <WithBreadcrumbs
        href="/medical-certifications-admin"
        label="Students medical certifications"
      >
        <div className="flex justify-center items-center h-full">
          <MedicalCertificationsAdminForm />
        </div>
      </WithBreadcrumbs>
    </>
  );
}

export const getServerSideProps = withSession(async function ({ req, res }) {
  return { props: {} };
});
