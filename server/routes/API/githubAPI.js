const { graphql } = require("@octokit/graphql");
require('dotenv').config();
process.env.REACT_APP_GH_TOKEN ? console.log("I found the API key") : console.log("I didn't find an API key")

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
        authorization: "token " + process.env.REACT_APP_GH_TOKEN,
      },
    }),
  };
