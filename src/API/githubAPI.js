const { graphql } = require("@octokit/graphql");

let { data } = await graphql({
  query: `query pinnedRepos($login: String!, $num: Int = 6) {
    user(login: $login) {
      pinnedItems(first: $num) {
        edges {
          node {
            ... on Repository {
              id
              name
              object(expression: "main:README.md") {
                ... on Blob {
                  text
                }
              }
            }
          }
        }
      }
    }
  }`,
  login: "DrDano",
  headers: {
    authorization: "token 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",
  },
});

console.log(data);
