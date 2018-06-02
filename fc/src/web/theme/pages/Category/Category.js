import React from "react";
import Redirect from "react-router/Redirect";
import withRouter from "react-router/withRouter";
import compose from "recompose/compose";
import withProps from "recompose/withProps";

import EnhanceCategory from "./EnhanceCategory";
import CategoryQuery from "./CategoryQuery.gql";
import LoadingArea from "theme/ui/molecules/LoadingArea";

const Category = ({ loading, category }) => {
  console.log(category);
  if (loading) {
    return <LoadingArea>Loading…</LoadingArea>;
  } else if (!category) {
    //return <Redirect to="/not-found" />;
    return <p>NOT FOUND </p>;
  }

  return (
    <div>
      <h1>{category.name}</h1>
    </div>
  );
};

export default compose(
  withRouter,
  withProps(props => ({ code: props.match.params.code })),
  EnhanceCategory(CategoryQuery)
)(Category);
