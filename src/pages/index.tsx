import { withSession } from "@/shared/util";
import styles from "../styles/variables.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.child}></div>
    </div>
  );
}

export const getServerSideProps = withSession(async function ({ req, res }) {
  return { props: {} };
});
