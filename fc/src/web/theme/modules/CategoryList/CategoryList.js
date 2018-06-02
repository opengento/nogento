import React from "react";
import CategoryItem from "../CategoryItem";
import MediaGrid from "theme/ui/organisms/MediaGrid";

// We are using a specific JSX operator called the "spread" operator that will pass
// all properties of the given "product" object as props to the ProductItem component
// See : https://reactjs.org/docs/jsx-in-depth.html#spread-attributes
const CategoryList = ({ categories }) => {
  return (
    <MediaGrid>
      {categories.map(category => <CategoryItem key={category.name} {...category} />)}
    </MediaGrid>
  );
};

export default CategoryList;
