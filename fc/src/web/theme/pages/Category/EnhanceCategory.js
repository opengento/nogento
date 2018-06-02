import { graphql } from "react-apollo";

export default CategoryQuery =>
  graphql(CategoryQuery, {
    options: ({ code }) => ({
      variables: {
        code
      }
    }),
    props: ({ data }) => ({
      loading: data.loading,
      category: !data.loading && data.category
    })
  });
