import React from "react";
import Link from "theme/ui/atoms/Typography/Link";
import "./CategoryItem.scss";

const CategoryItem = ({ url, name }) => {
  return (
    <li className="category-item">
      <Link to={url}>{name}</Link>
    </li>
  );
};

export default CategoryItem;
