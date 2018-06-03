import React from "react";

import EnhanceNavigation from "./EnhanceNavigation";
import NavigationQuery from "./NavigationQuery.gql";
import CategoryList from "theme/modules/CategoryList";

const Navigation = ({ categories }) => {
  return <nav>{categories && <CategoryList categories={categories} />}</nav>;
};

export default EnhanceNavigation({ NavigationQuery })(Navigation);
