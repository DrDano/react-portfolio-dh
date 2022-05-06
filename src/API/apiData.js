const {pinnedProjectsArr} = require('./githubAPI')

const pinnedProjects = async () => {
    const pinnedData = await pinnedProjectsArr
    const readmeArr = pinnedData.user.pinnedItems.edges.map((project) => {
        return {name: project.node.name, readme: project.node.object.text};
    })


}

pinnedProjects()

// const readmeData = pinnedProjects.map((edge) => {
//     console.log(edge)
// })