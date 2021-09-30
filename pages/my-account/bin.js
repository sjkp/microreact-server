/* eslint-disable class-methods-use-this */

import React from "react";
import Head from "next/head";
import getUser from "cgps-application-server/middleware/get-user";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";

import AccountPageNav from "../../components/AccountPageNav";
import AccountProjectGrid from "../../components/AccountProjectGrid";
import Styles from "../../styles/account-page.module.css";

import * as DataHooks from "../../utils/data-hooks";

export async function getServerSideProps(context) {
  const user = await getUser(context.req, context.res);
  if (!user) {
    return {
      redirect: {
        destination: "/signin",
        permanent: false,
      },
    };
  }
  return {
    props: {}, // will be passed to the page component as props
  };
}

function PageTitle() {
  return (
    <Typography variant="h2">
      <em>Projects in the Recycle Bin are deleted after 30 days.</em>
    </Typography>
  );
}

const emptyIcon = (<DeleteOutlineOutlinedIcon />);

function MyProjectsPage() {
  return (
    <div
      className={Styles.page}
    >
      <Head>
        <title>My Projects</title>
      </Head>

      <AccountPageNav />

      <main>
        <Container maxWidth="lg">
          <PageTitle />

          <AccountProjectGrid
            apiEndpoint={DataHooks.userProjectsHook}
            filter={(doc) => !!doc.binned}
            emptyIcon={emptyIcon}
            emptyMessage="No Projects in Recycle Bin"
          />
        </Container>
      </main>
    </div>
  );
}

export default MyProjectsPage;
