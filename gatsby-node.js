const path = require(`path`)

exports.createPages = async ({ graphql, actions}) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allDataJson {
        edges {
          node {
            description
            subheader
            slug
            products {
              header
              image {
                alt
                src
              }
              suppliers {
                href
                supplier
              }
            }
          }
        }
      }
    }
  `)
  
  result.data.allDataJson.edges.forEach( ({node}) => {
    createPage({
      path: node.slug,
      component: path.resolve(`./src/templates/product.js`),
      context: {
        slug: node.slug,
      }
    })
  })
}
