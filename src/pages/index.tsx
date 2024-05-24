import { withSession } from "@/shared/util";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center items-center flex-col gap-16">
      <Image src="/logo.png" quality={100} alt="logo"  width={300} height={100}/>
      <h1 className="text-3xl font-bold">Welcome to Attendease!</h1>
    </div>
  );
}

export const getServerSideProps = withSession(async function ({ req, res }) {
  return { props: {} };
});
