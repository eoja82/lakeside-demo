import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby";
import styles from "./prodSidebar.module.css"

export default () => {
  const data = useStaticQuery(graphql`
  query SlugTwoQuery {
    allDataJson {
      nodes {
        slug
      }
    }
  }
  `)
  // for active Link
  const activeStyles = {
    backgroundColor: "rgb(58, 65, 76, .7)",
    color: "white"
  };
  let list = [];
  data.allDataJson.nodes.forEach( ({slug}, i) => {
    let split = slug.split("/")
    let listItem = split[2].replace(/-/g, " ");
    list.push({path: slug, key: i, name: listItem})
  });
  return (
    <div id={styles.sidebar}>
      {list.map( x => (
        <Link to={x.path} id={styles.link} activeStyle={activeStyles} key={x.key}>
          {x.name}
        </Link>
      ))}
    </div>
  )
}