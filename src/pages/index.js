import React from "react";
import Layout from "../components/layout";
import { useStaticQuery, graphql, Link } from "gatsby";
import styles from "./styles/index.module.css";
import Slideshow from "../components/slideshow";

let List = () => {
  const data = useStaticQuery(graphql`
  query SlugToQuery {
    allDataJson {
      nodes {
        slug
      }
    }
  }
  `)
  let list = [];
  data.allDataJson.nodes.forEach( ({slug}, i) => {
    let split = slug.split("/")
    let listItem = split[2].replace(/-/g, " ");
    list.push({path: slug, key: i, name: listItem})
  });
  return (
    <div id={styles.list}>
      {list.map( x => (
        <Link to={x.path} key={x.key} className={styles.listItem}>
          {x.name}
        </Link>
      ))}
      <Link className={styles.listItem + " " + styles.noLink}>And More!</Link>
    </div>
  )
}

class Index extends React.Component {
  render() {
    return (
      <Layout>
      <div id={styles.intro}> 
        <div id={styles.about}>
        <h3 id={styles.h3}>Lakeside Lumber is your source for:</h3>
        <List />
        </div>
        <Slideshow />
      
      </div>
      <div id={styles.moreInfo}>
        <div className={styles.flex + " " + styles.reverse}>
          <div>
            <img className={styles.moreInfoImg} src="/img/storeFront.jpg" alt="store front" />
          </div>
          <div>
            <p>Family owned and operated, Lakeside Lumber offers everything a builder or homeowner will need.</p>
            <p>​With a knowledgeable and courteous staff, we are always happy to help you with your projects.</p>
          </div>
        </div>
        <div className={styles.flex + " " + styles.wrap}>
          <div>
            <p>We have a wide variety of treated, SPF, and cedar lumber.</p>
          </div>
          <div>
            <img className={styles.moreInfoImg} src="/img/wharehouseInside.jpg" alt="inside wharehouse" />
          </div>
        </div>  
        <div className={styles.flex + " " + styles.reverse}>
          <div>
            <img className={styles.moreInfoImg} src="/img/truckShingles.jpg" alt="delivery truck" />
          </div>
          <div>
            <p>We have supplies for a new roof or to repair an existing one - from steel to tar-paper.</p>
          </div>
        </div>
        <div className={styles.flex + " " + styles.wrap}>
          <div>
            <p>WE DELIVER!</p>
            <p>Proudly serving the Edge of the Wilderness area - Marcell, Bigfork, Effie, as well as Deer River, Balsom, Talmoon, and Grand Rapids areas.</p>
          </div>
          <div>
            <img className={styles.moreInfoImg} src="/img/loadedTruck.jpg" alt="delivery truck" />
          </div>
        </div>
      </div>
    </Layout>
    )
  }
}

export default Index