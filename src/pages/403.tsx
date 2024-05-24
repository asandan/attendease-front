import { withSession } from "@/shared";

export default function Custom403() {
  return <h1 className="h-full flex justify-center items-center text-3xl">403 FORBIDDEN</h1>;
}

export const getServerSideProps = withSession(async function ({ req, res }) {
  return { props: {} };
});
