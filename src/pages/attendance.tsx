import { InfiniteDateTable } from "@/components/InfiniteDateTable";
import { withSession } from "@/shared/util";

export default function Attendance() {
  return <InfiniteDateTable />;
}

export const getServerSideProps = withSession(async function ({ req, res }) {
  return { props: {} };
});
