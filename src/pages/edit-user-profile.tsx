import { EditUserProfileForm } from "@/components/Forms/EditUserProfile";
import { SEOHead } from "@/components/SEO";
import { WithBreadcrumbs } from "@/components/WithBreadcrumbs";
import { withSession } from "@/shared";

export default function EditUserProfile() {
  return (
    <>
      <SEOHead desc="Edit teacher or student data" title="Edit user profile" />
      <WithBreadcrumbs href="/edit-user-profile" label="Edit user profile">
        <div className="flex flex-col justify-center h-full items-center">
          <EditUserProfileForm />
        </div>
      </WithBreadcrumbs>
    </>
  );
}

export const getServerSideProps = withSession(async function ({ req, res }) {
  return { props: {} };
});
