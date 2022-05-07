const { pinnedProjectsArr } = require("./githubAPI");

const pinnedProjects = async () => {
  const pinnedData = await pinnedProjectsArr;
  const readmeArr = pinnedData.user.pinnedItems.edges.map((project) => {
    return {
      name: project.node.name,
      readme: project.node.object.text,
      url: project.node.url,
    };
  });

  const readmeComponents = readmeArr.map((project) => {
    return project.readme.split("##");
  });
  const photoUrl =
    readmeComponents[0][1].split("\n")[2].split("(")[1].slice(1, -1);

  const portfolioData = {
    title: readmeArr[0].name,
    description: readmeComponents[1][1]
      .split("\n")
      .filter((chunk) => {
        if (chunk.search(/^(.+)\/+([^\/]+)$/)) {
          return chunk;
        }
      })
      .splice(1)
      .join("")
      .trim(),
    photo:
      "https://raw.githubusercontent.com" +
      readmeArr[0].url
        .split("/")
        .filter((chunk) => chunk === "github")
        .join("") +
      "/DrDano/" +
      readmeArr[0].name +
      "/main" + photoUrl,
    projectDeployment: /*--deployment url needs to come from Deployment part of readme */deployment,
    key: 0,
    /* key will be incremented with loop */
    projectRepo: readmeArr[0].url
  };

  console.log(portfolioData.projectRepo);
};

pinnedProjects();
