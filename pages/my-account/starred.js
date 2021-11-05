/* eslint-disable class-methods-use-this */

import React from "react";
import Head from "next/head";
import getUser from "cgps-application-server/middleware/get-user";
import { useSession } from "next-auth/client";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Skeleton from "@material-ui/lab/Skeleton";
import StarOutlineOutlinedIcon from "@material-ui/icons/StarOutlineOutlined";

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

const emptyIcon = (<StarOutlineOutlinedIcon />);

function PageTitle() {
  const [ session, isLoading ] = useSession();

  return (
    <Typography variant="h2">
      {
        isLoading ? <Skeleton /> : `Projects starred by ${session?.user.name} (${session?.user.email})`
      }
    </Typography>
  );
}

function MyProjectsPage() {
  return (
    <div
      className={Styles.page}
    >
      <Head>
        <title>Starred projects</title>
      </Head>

      <AccountPageNav />

      <main>
        <Container maxWidth="lg">
          <PageTitle />

          <AccountProjectGrid
            apiEndpoint={DataHooks.userProjectsHook}
            filter={(doc) => !doc.binned && doc.starred}
            emptyMessage="No Starred Projects"
            emptyIcon={emptyIcon}
          />
        </Container>
      </main>
    </div>
  );
}

export default MyProjectsPage;
