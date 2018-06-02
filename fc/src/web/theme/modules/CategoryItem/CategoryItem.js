import React from "react";
import Link from "theme/ui/atoms/Typography/Link";

const CategoryItem = ({ url, name }) => {
  return (
    <li>
      <Link to={url}>{name}</Link>
    </li>
  );
};

export default CategoryItem;
