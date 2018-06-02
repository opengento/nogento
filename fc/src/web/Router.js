import React from "react";
import BrowserRouter from "react-router-dom/BrowserRouter";
import Switch from "react-router/Switch";
import Route from "react-router/Route";

import Layout from "./theme/ui/templates/Layout";
import Header from "./theme/modules/Header";
import Footer from "./theme/modules/Footer";
import Home from "./theme/pages/Home";
import Category from "./theme/pages/Category";
import NotFound from "./theme/pages/NotFound";

export default () => (
  <BrowserRouter>
    <Layout header={<Header />} footer={<Footer />}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/category/:code" component={Category} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);
