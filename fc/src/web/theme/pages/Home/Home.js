import React from "react";
import HomeQuery from "./HomeQuery.gql";
import EnhanceHome from "./EnhanceHome";
import ProductList from "theme/modules/ProductList";
import LoadingArea from "theme/ui/molecules/LoadingArea";
import Page from "theme/ui/templates/Page";
import H2 from "../../ui/atoms/Typography/Heading/H2";
import Button from "../../ui/atoms/Button";

import "./Home.scss";

const Home = ({ categories, products, loading }) => (
  <Page>
    {loading ? (
      <LoadingArea>Loading products and categories…</LoadingArea>
    ) : (
      <section className="home">
        <div className="home__banner">
          <H2 className="highlight">
            "How about if I sleep a little bit longer and forget all this
            nonsense"
          </H2>
          <p>
            He thought, but that was something he was unable to do because he
            was used to sleeping on his right, and in his present state couldn't
            get into that position. However hard he threw himself onto his
            right, he always rolled back to where he was. He must have tried it
            a hundred times, shut his eyes so that he wouldn't have to look at
            the floundering legs, and only stopped when he began to feel a mild,
            dull pain there that he had never felt before. "Oh, God", he
            thought, "what a strenuous career it is that I've chosen! Travelling
            day in and day out. Doing business like this takes much more effort
            than doing your own business at home, and on top of that there's the
            curse of travelling, worries about making train connections, bad and
            irregular food, contact with different people all the time so that
            you can never get to know anyone or become friendly with them. It
            can all go to Hell!
          </p>
          <Button>Let's see!</Button>
        </div>
        <ProductList products={products} />
      </section>
    )}
  </Page>
);

export default EnhanceHome(HomeQuery)(Home);
