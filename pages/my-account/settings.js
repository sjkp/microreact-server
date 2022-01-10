/* eslint-disable class-methods-use-this */

import React from "react";
import Head from "next/head";
import getUser from "cgps-application-server/middleware/get-user";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Skeleton from "@material-ui/lab/Skeleton";
import { useSession } from "next-auth/react";

import AccountPageNav from "../../components/AccountPageNav";
import UiDataHook from "../../components/UiDataHook";
import UiCopyTextfield from "../../components/UiCopyTextfield";
import UiAvatar from "../../components/UiAvatar";
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

function ProfileSection() {
  const { data: session, status } = useSession();
  const isLoading = (status === "loading");

  if (isLoading) {
    return (<Skeleton />);
  }

  return (
    <section>
      <p>
        Name: {session?.user.name}
      </p>

      <p>
        Email: {session?.user.email}
      </p>

      <p>
        Account Gravatar (change at <a href="https://gravatar.com/" target="_blank">https://gravatar.com/</a>):
        <UiAvatar email={session?.user.email} />
      </p>

    </section>
  );
}

function ApiSection() {
  return (
    <section className={Styles["api-section"]}>
      <Typography variant="h3">API Access</Typography>

      <UiDataHook
        LoadingView={Skeleton}
        dataHook={DataHooks.userAccessToken}
      >
        {
          ({ data }) => {
            return (
              <UiCopyTextfield
                label="Access Token"
                title="Copy Access Token"
                value={data.token}
              />
            );
          }
        }
      </UiDataHook>
    </section>
  );
}

function DeleteAccountSection() {
  const { data: session, status } = useSession();
  const isLoading = (status === "loading");

  if (isLoading) {
    return (<Skeleton />);
  }

  return (
    <section>
      <Typography variant="h3">Account Deletion</Typography>

      <form
        method="post"
        action={`mailto:support@microreact.org?subject=Account Deletion&body=Please send this request from ${session?.user.email}`}
        encType="text/plain"
      >
        <Button
          color="primary"
          variant="outlined"
          type="submit"
        >
          Request Account Deletion
        </Button>
      </form>
    </section>
  );
}

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
          <Typography variant="h2">Account Settings</Typography>

          <ProfileSection />

          <ApiSection />

          <DeleteAccountSection />

        </Container>
      </main>
    </div>
  );
}

export default MyProjectsPage;
