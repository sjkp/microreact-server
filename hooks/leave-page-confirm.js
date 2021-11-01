import { useEffect } from "react";
import Router from "next/router";
import { useBeforeUnload } from "react-use";

import { selectors as viewerSelectors, store as viewerStore } from "microreact-viewer";

function checkChnages() {
  const presentState = viewerSelectors.presentStateSelector(viewerStore.getState());
  return presentState.config.isDirty;
}

const useLeavePageConfirm = (
  message = "Are you sure want to leave this page?"
) => {
  useBeforeUnload(checkChnages, message);

  useEffect(() => {
    const handler = () => {
      if (checkChnages() && !window.confirm(message)) {
        throw "Route Canceled";
      }
    };

    Router.events.on("routeChangeStart", handler);

    return () => {
      Router.events.off("routeChangeStart", handler);
    };
  }, [checkChnages, message]);
};

export default useLeavePageConfirm;
