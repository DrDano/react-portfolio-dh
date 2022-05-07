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
    // parsed out title and description from readme, now need to parse out photo url (will go to photo in actual repository)
    // Need to change all readme photo names to match their repo names exactly
    photo:
      "https://raw.githubusercontent.com" +
      readmeArr[0].url
        .split("/")
        .filter((chunk) => chunk === "github")
        .join("") +
      "/DrDano/" +
      readmeArr[0].name +
      "/main/src/assets/images/" +
      readmeArr[0].name +
      ".jpg",
  };

  console.log(portfolioData.photo);
};

pinnedProjects();
