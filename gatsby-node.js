const path = require(`path`)

exports.createPages = async ({ graphql, actions}) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allDataJson {
        edges {
          node {
            description
            slug
            images {
              image
              type
            }
            product {
              link
              logo
              manufacturer
              type
            }
          }
        }
      }
    }
  `)
  //console.log(JSON.stringify(result, null, 4))
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
