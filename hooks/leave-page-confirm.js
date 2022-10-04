import { useEffect } from "react";
import Router from "next/router";
import { useBeforeunload } from "react-beforeunload";

import { selectors as viewerSelectors, store as viewerStore } from "microreact-viewer/index";

function checkChnages() {
  const presentState = viewerSelectors.presentStateSelector(viewerStore.getState());
  return presentState.config.isDirty;
}

const useLeavePageConfirm = (
  message = "Are you sure want to leave this page?"
) => {
  useBeforeunload((event) => {
    if (checkChnages()) {
      event.preventDefault();
    }
  });

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
