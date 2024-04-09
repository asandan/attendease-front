import { withSession } from "@/util";
import styles from "../styles/variables.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.child}> qweqq</div>
    </div>
  );
}

export const getServerSideProps = withSession(async function ({ req, res }) {
  return { props: {} };
});
