const {pinnedProjectsArr} = require('./githubAPI')

const pinnedProjects = async () => {
    const pinnedData = await pinnedProjectsArr
    const readmeArr = pinnedData.user.pinnedItems.edges.map((project) => {
        return {name: project.node.name, readme: project.node.object.text};
    });

    const readmeComponents = readmeArr.map((project) => {
        return project.readme.split("##");
    });

    const portfolioData = {
        title: readmeArr.name,
        description: readmeComponents[1][1].split("\n").filter((chunk) => {
            if (chunk.search(/^(.+)\/+([^\/]+)$/)) {
                return chunk
            }
        }),
        
    }

    console.log(portfolioData.description)
}

pinnedProjects()
