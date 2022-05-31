const { pinnedProjectsArr } = require("./githubAPI");

const pinnedProjects = async () => {
  const pinnedProjects = await pinnedProjectsArr;
  const readmeArr = pinnedProjects.user.pinnedItems.edges.map((project) => {
    return {
      name: project.node.name,
      readme: project.node.object.text.split("##"),
      url: project.node.url,
    };
  });

  const portfolioProjects = readmeArr.map((project, i) => {
    const photoUrl = project.readme[1]
      .split("![")[1]
      ?.split("(.")[1]
      ?.split(")")[0];
    // console.log([...
    //   project.readme[0].split("\n").filter((line) => {
    //     return line.trim().slice(0, 2) === "!["
    //   }).join("").split("![](").join("").split(")")
    // ]);
    const portfolioData = {
      title: project.name,
      description: project.readme[1]
        .split("\n")
        .filter((chunk) => {
          if (chunk.search(/^(.+)\/+([^\/]+)$/)) {
            return chunk;
          }
        })
        .splice(1)
        .join("")
        .trim(),
      technologies: project.readme[0]
        .split("\n")
        .filter((line) => {
          return line.trim().slice(0, 2) === "![";
        })
        .join("")
        .split("![](")
        .join("")
        .split(")"),
      photo:
        "https://raw.githubusercontent.com" +
        project.url
          .split("/")
          .filter((chunk) => chunk === "github")
          .join("") +
        "/DrDano/" +
        project.name +
        "/main" +
        photoUrl,
      projectDeployment:
        project.readme[3].split("(")[1]?.trim()?.slice(0, -1).slice(0, 4) ===
        "http"
          ? project.readme[3].split("(")[1]?.trim()?.slice(0, -1)
          : "",
      key: i,
      projectRepo: project.url,
    };
    return portfolioData;
  });
  return portfolioProjects;
};

module.exports = pinnedProjects;
