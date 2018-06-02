import React from "react";
import HomeQuery from "./HomeQuery.gql";
import EnhanceHome from "./EnhanceHome";
import ProductList from "theme/modules/ProductList";
import CategoryList from "theme/modules/CategoryList";
import LoadingArea from "theme/ui/molecules/LoadingArea";
import Page from "theme/ui/templates/Page";

const Home = ({ categories, products, loading }) => (
  <Page>
    {loading ? (
      <LoadingArea>Loading products and categories…</LoadingArea>
    ) : (
      <div>
        <CategoryList categories={categories} />
        <ProductList products={products} />
      </div>
    )}
  </Page>
);

export default EnhanceHome(HomeQuery)(Home);
