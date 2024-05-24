import { MarkStudentForm } from "@/components/Forms/MarkStudent";
import { SEOHead } from "@/components/SEO";
import { WithBreadcrumbs } from "@/components/WithBreadcrumbs";
import { withSession } from "@/shared";

export default function MarkStudent() {
  return (
    <>
      <SEOHead desc="Mark your student" title="Mark student" />
      <WithBreadcrumbs href="/mark-studnet" label="Mark student">
        <div className="flex justify-center items-center h-full">
          <MarkStudentForm />
        </div>
      </WithBreadcrumbs>
    </>
  );
}

export const getServerSideProps = withSession(async function ({ req, res }) {
  return { props: {} };
});