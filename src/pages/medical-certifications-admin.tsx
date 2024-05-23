import { MedicalCertificationsAdminForm } from "@/components/Forms/MedicalCertificationsAdmin/MedicalCertificationAdmin";
import { SEOHead } from "@/components/SEO";
import { WithBreadcrumbs } from "@/components/WithBreadcrumbs";

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
