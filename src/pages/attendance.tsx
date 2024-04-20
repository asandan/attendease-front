import { InfiniteDateTable } from "@/components/InfiniteDateTable";
import {
  DAYS_DEFAULT_COLUMN,
  generateColumns,
  getColumnDefs,
} from "@/components/InfiniteDateTable/util";
import { TODAY, withSession } from "@/shared/util";
export default function Attendance() {
  const columns = generateColumns(TODAY, DAYS_DEFAULT_COLUMN, getColumnDefs);

  return <InfiniteDateTable columns={columns} />;
}

export const getServerSideProps = withSession(async function ({ req, res }) {
  return { props: {} };
});
