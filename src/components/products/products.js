import React from "react"
import { Helmet } from "react-helmet"
import styles from "./products.module.css"

class Display extends React.Component {
  render() {
    let split = this.props.product.slug.split("/")
    let titleInfo = split[2].replace(/-/g, " ");
    return (
      <div id={styles.container}>
        <Helmet>
          <title>{`Lakeside Lumber is your source for ${titleInfo}`}</title>
          <meta name="description" content={this.props.product.description} />
          <meta name="keywords" content={`marcell, bigfok, effie, deer river, talmoon, grand rapids, ${titleInfo}`} />
        </Helmet>
        <div id={styles.header}>
          <h4 id={styles.productHeader}>
            {this.props.product.description}
          </h4>
        </div>
        <div id={styles.productImg}>
          {this.props.product.images.map( (x, i) =>
            <img src={x.image} alt={x.type} key={i} className={styles.productImg} />
          )}
        </div>
        <div id={styles.products}>
          {this.props.product.product.map( (x, i) => 
            <div key={i} id={styles.logoDiv}>
              <a href={x.link} target="_blank" rel="noopener noreferrer">
                <img src={x.logo} alt={x.manufacturer} />
              </a>
            </div>
          )}
        </div>
      </div>
    )
  }
}
export default Display

