import { graphql } from "react-apollo";
import compose from "recompose/compose";

export default ({ NavigationQuery }) =>
  compose(
    graphql(NavigationQuery, {
      options: props => ({
        variables: {}
      }),
      props: ({ data }) => ({
        categories: data.navigationMenu,
        loading: data.loading
      })
    })
  );
