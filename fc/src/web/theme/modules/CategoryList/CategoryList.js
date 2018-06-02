import React from "react";
import CategoryItem from "../CategoryItem";
import NavigationMenu from "theme/ui/organisms/NavigationMenu";

// We are using a specific JSX operator called the "spread" operator that will pass
// all properties of the given "category" object as props to the CategoryItem component
// See : https://reactjs.org/docs/jsx-in-depth.html#spread-attributes
const CategoryList = ({ categories }) => {
  return (
    <NavigationMenu>
      {categories.map(category => (
        <CategoryItem key={category.name} {...category} />
      ))}
    </NavigationMenu>
  );
};

export default CategoryList;
