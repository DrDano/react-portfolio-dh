const { graphql } = require("@octokit/graphql");
process.env.SECRET_KEY ? console.log("I found the API key stored at SECRET_KEY") : console.log("I didn't find the API key at SECRET_KEY")

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
        authorization: "token " + process.env.SECRET_KEY,
      },
    }),
  };
