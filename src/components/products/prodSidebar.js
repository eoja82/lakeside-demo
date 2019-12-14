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
    backgroundColor: "rgb(65, 65, 65)",
    color: "white"
  };
  let list = [];
  data.allDataJson.nodes.forEach( ({slug}, i) => {
    let split = slug.split("/")
    let listItem = split[2].replace(/-/g, " ");
    list.push({path: slug, key: i, name: listItem})
  });
  return (
    <nav className="nav flex-column navbar-light bg-light fixed-left" id={styles.sidebar}>
      {list.map( x => (
        <Link to={x.path} className="nav-link" id={styles.link} activeStyle={activeStyles} key={x.key}>
          {x.name}
        </Link>
      ))}
    </nav>
  )
}