import React from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import Head from "next/head";

import UiLoadingSpinner from "../../components/UiLoadingSpinner";

import ProjectsService from "../../services/projects";
import ProxyService from "../../services/proxy-service";

export async function getServerSideProps(context) {
  const [ projectId ] = context.query.param;
  const props = {};
  const metadata = await ProjectsService.getProjectMetadata(projectId);
  if (metadata) {
    props.hasMetadata = true;
    props.title = metadata.name || null;
    props.description = metadata.description || null;
    if (metadata.image) {
      props.image = ProxyService.absolute(`api/projects/image?project=${projectId}`);
    }
  }
  return { props };
}

const DynamicProjectPage = dynamic(
  () => import("../../components/ProjectPage.react"),
  {
    loading: UiLoadingSpinner,
    ssr: false,
  },
);

const Project = (props) => {
  const router = useRouter();

  if (router?.query?.param) {
    const { param, ...rest } = router.query;

    return (
      <React.Fragment>
        {
          props.hasMetadata && (
            <Head>
              <title>{ props.title }</title>
              <meta property="twitter:card" content="summary" />
              <meta property="twitter:site" content="@mymicroreact" />
              <meta property="og:type" content="website" />
              <meta property="og:site_name" content="Microreact" />
              <meta property="og:title" content={ props.title} />
              <meta property="og:description" content={ props.description} />
              <meta property="og:image" content={ props.image} />
            </Head>
          )
        }
        <DynamicProjectPage
          projectSlug={param.join("/")}
          query={rest}
        />
      </React.Fragment>
    );
  }
  else {
    return null;
  }
};

export default Project;
