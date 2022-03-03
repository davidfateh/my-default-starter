
exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
      query {
        allContentfulPost {
          nodes {
            date
            slug
            title
            content {
              raw
            }
          }
        }
      }
    `
  );
  console.log(data);

  const { createPage } = actions

  data.allContentfulPost.nodes.forEach(node => {
    createPage({
      path: `/${node.slug}`,
      component: require.resolve("./src/templates/using-dsg.js"),
      context: {
        data: { node }
      },
      defer: true,
    })
  })
}
