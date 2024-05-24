import { ProfileForm } from "@/components/Forms/Profile";
import { SEOHead } from "@/components/SEO";
import { WithBreadcrumbs } from "@/components/WithBreadcrumbs";
import { withSession } from "@/shared";

export default function MyProfile() {
  return (
    <>
      <SEOHead title="My profile" desc="My profile" />
      <WithBreadcrumbs href="/my-profile" label="My profile">
        <div className="flex flex-col justify-center h-full items-center">
          <ProfileForm />
        </div>
      </WithBreadcrumbs>
    </>
  );
}

export const getServerSideProps = withSession(async function ({ req, res }) {
  return { props: {} };
});
