import Head from "next/head";
import styles from "@/styles/Layout.module.css";
import Header from "@components/header";
const Layout = ({ children, headTitle }: any, ref: any) => {
  return (
    <>
      <Head>
        <title>{headTitle}</title>
      </Head>
      <Header></Header>
      <main className={styles.main}>{children}</main>
    </>
  );
};
export default Layout;
