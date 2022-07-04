/* eslint-disable class-methods-use-this */

import React from "react";
import dynamic from "next/dynamic";

import UiLoadingBar from "../components/UiLoadingBar";

export async function getServerSideProps(context) {
  return {};
}

const DynamicUploadPage = dynamic(
  () => import("../components/UploadPage"),
  {
    loading: UiLoadingBar,
    ssr: false,
  },
);

function UploadPage() {
  return (
    <DynamicUploadPage />
  );
}

export default UploadPage;
