import { MedicalCertification } from "@/components/MedicalCertification";
import { withSession } from "@/shared";

export default function Dashboard() {
  return <MedicalCertification />;
}

export const getServerSideProps = withSession(async function ({ req, res }) {
  return { props: {} };
});
