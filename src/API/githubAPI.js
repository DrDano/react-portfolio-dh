const { graphql } = require("@octokit/graphql");
// changes necessary for redeploy

module.exports = {
    pinnedProjectsArr: graphql({
      query: `query pinnedRepos($login: String!, $num: Int = 6) {
      user(login: $login) {
        pinnedItems(first: $num) {
          edges {
            node {
              ... on Repository {
                id
                name
                url
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
        authorization: "token " + process.env.envkey_SECRET_KEY,
      },
    }),
  };
