import { InfiniteDateTable } from "@/components/InfiniteDateTable";
import {
  DAYS_DEFAULT_COLUMN,
  generateColumns,
  getColumnDefs,
} from "@/components/InfiniteDateTable/util";
import { SEOHead } from "@/components/SEO";
import { WithBreadcrumbs } from "@/components/WithBreadcrumbs";
import { TODAY, withSession } from "@/shared/util";

export default function Attendance() {
  const columns = generateColumns(TODAY, DAYS_DEFAULT_COLUMN, getColumnDefs);
  return (
    <>
      <SEOHead
        desc="Look for your attendance."
        title="Medical certitications"
      />
      <WithBreadcrumbs href="/attendance" label="My attendance">
        <InfiniteDateTable columns={columns} />
      </WithBreadcrumbs>
    </>
  );
}

export const getServerSideProps = withSession(async function ({ req, res }) {
  return { props: {} };
});
