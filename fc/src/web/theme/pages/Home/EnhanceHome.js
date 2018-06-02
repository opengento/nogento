import { graphql } from "react-apollo";
import compose from "recompose/compose";

export default HomeQuery =>
  compose(
    graphql(HomeQuery, {
      options: props => ({
        variables: {}
      }),
      props: ({ data }) => ({
        products: data.products,
        categories: data.categories,
        loading: data.loading
      })
    })
  );
