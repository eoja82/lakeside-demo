const path = require(`path`)
const docks = require("./src/components/products/data/docks.json");
const doors = require("./src/components/products/data/doors.json");
const hardware = require("./src/components/products/data/hardware.json");
const paintStain = require("./src/components/products/data/paints-and-stains.json");
const roofing = require("./src/components/products/data/roofing.json");
const windows = require("./src/components/products/data/windows.json");
/* exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `DataJson`) {
    node.images.map( (x, i) => {
      createNodeField({
        node,
        name: `pageImage${i}`,
        value: x.image
      })
    })

  }
} */
const data = [docks, doors, hardware, paintStain, roofing, windows];
exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  data.forEach( (x, i) => {
    let { description, slug, product, images } = x;
    let { name, ext } = path.parse(images[0].image);
    let absolutePath = path.resolve(`${__dirname}` + "/static" + images[0].image);
    //console.log(absolutePath);
    let data = {
      name,
      ext,
      absolutePath,
      extension: ext.substring(1)
    };
    let imageNode = {
      ...data,
      id: createNodeId(`image-${name}`),
      internal: {
        type: "ProductImage",
        contentDigest: createContentDigest(data)
      }
    };
    actions.createNode(imageNode);
    let node = {
      description, 
      slug, 
      product, 
      images: imageNode, 
      id: createNodeId(slug), 
      internal: {
        type: "Product", 
        contentDigest: createContentDigest(x)}
    };
    actions.createNode(node);
  });
}

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
