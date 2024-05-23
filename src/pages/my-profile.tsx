import { InputWithLabel } from "@/components/Input";
import { SEOHead } from "@/components/SEO";
import { Button } from "@/components/ui";
import { WithBreadcrumbs } from "@/components/WithBreadcrumbs";
import { PROFILE_INPUTS, withSession } from "@/shared";

export default function MyProfile() {
  return (
    <>
      <SEOHead title="My profile" desc="My profile" />
      <WithBreadcrumbs href="/my-profile" label="My profile">
        <div className="flex flex-col justify-center h-full items-center">
          <div className="flex flex-col items-center w-[23%] gap-5">
            {PROFILE_INPUTS.map((input) => (
              <InputWithLabel key={input.id} {...input} />
            ))}
            <Button variant="outline" className="w-full">
              Submit
            </Button>
          </div>
        </div>
      </WithBreadcrumbs>
    </>
  );
}

export const getServerSideProps = withSession(async function ({ req, res }) {
  return { props: {} };
});
