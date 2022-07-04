/* eslint-disable class-methods-use-this */
import React from "react";
import PropTypes from "prop-types";
import Skeleton from "@material-ui/lab/Skeleton";
import Grid from "@material-ui/core/Grid";

import UiLoadingBar from "./UiLoadingBar";
import UiEmptyState from "./UiEmptyState";
import ShowcaseCard from "./ShowcaseCard.react";

import * as DataHooks from "../utils/data-hooks";

function SkeletonGrid() {
  return (
    <div>
      <UiLoadingBar />

      <Grid container spacing={3}>
        {
          Array.from(new Array(12)).map(
            (_, index) => (
              <Grid
                key={index}
                item
                xs={12}
                sm={6}
                md={4}
                lg={4}
                xl={3}
              >
                <Skeleton variant="rect" height={132} />
              </Grid>
            )
          )
        }
      </Grid>
    </div>
  );
}

function CustomShowcaseProjectGrid(props) {
  const { data, error } = DataHooks.showcaseProjectsHook();

  if (error) {
    return (
      <pre>{ error.message }</pre>
    );
  }

  if (!data) {
    return (<SkeletonGrid />);
  }

  return (
    <React.Fragment>
      {
        (data && data.length === 0)
          ?
          (
          <UiEmptyState
            icon={props.emptyIcon}
            message={props.emptyMessage}
          />
          )
          :
          (
            <div
              className="mr-showcase-grid"
            >
              {
                data.map(
                  (item) => (
                      <ShowcaseCard
                        key={item.id}
                        title={item.name}
                        linkUrl={item.url}
                        imageUrl={item.image}
                        supportingText={item.description}
                      />
                  )
                )
              }
            </div>
          )
      }
    </React.Fragment>
  );
}

CustomShowcaseProjectGrid.propTypes = {
  folderId: PropTypes.string.isRequired,
};

export default CustomShowcaseProjectGrid;
