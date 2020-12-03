import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby";
import styles from "./styles/prodSidebar.module.css";
import { withPrefix } from "gatsby";

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
    backgroundColor: "rgb(198, 198, 198, .7)",
    color: "black"
  };
  let list = [];
  data.allDataJson.nodes.forEach( ({slug}, i) => {
    let split = slug.split("/")
    let listItem = split[2].replace(/-/g, " ");
    list.push({path: slug, key: i, name: listItem})
  });
  return (
    <div id={styles.sidebar} style={{backgroundImage: `url(${withPrefix("/img/brickBG.jpeg")})`}}>
      {list.map( x => (
        <Link to={x.path} id={styles.link} activeStyle={activeStyles} key={x.key}>
          {x.name}
        </Link>
      ))}
    </div>
  )
}