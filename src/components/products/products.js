import React from "react"
import { Helmet } from "react-helmet"
import styles from "./styles/products.module.css"

class Display extends React.Component {
  render() {
    let split = this.props.product.slug.split("/")
    let titleInfo = split[2].replace(/-/g, " ");
    let descLogoSplit = this.props.product.descriptionLogos.split(/\*/g);
    return (
      <div id={styles.container}>
        <Helmet>
          <title>{`Lakeside Lumber is your source for ${titleInfo}`}</title>
          <meta name="description" content={this.props.product.description + this.props.product.descriptionLogos} />
          <meta name="keywords" content={`marcell, bigfok, effie, deer river, talmoon, grand rapids, ${titleInfo}`} />
        </Helmet>
        <div id={styles.header}>
          <h1 id={styles.h1}>{this.props.product.description}</h1>
        </div>
        <div id={styles.productImg}>
          {this.props.product.images.map( (x, i) =>
            <img src={x.image} alt={x.type} key={i} className={styles.productImg} />
          )}
        </div>
        <div id={styles.logoDescription}>
          <p className={styles.p}>Click on a link below for more information.</p>
          <div>
          {descLogoSplit.map( (x, i) => <p className={styles.pDiscription + " " + styles.p} key={i}>{x}</p>)}
          </div>
        </div>
        <div id={styles.products}>
          {this.props.product.product.map( (x, i) => 
            <div key={i} id={styles.logoDiv}>
              <a href={x.link} target="_blank" rel="noopener noreferrer" style={{textDecoration: "none"}}>
          { x.logo ? <img src={x.logo} alt={x.manufacturer} className={styles.img} /> : <h3 className={styles.h3}>{x.manufacturer}</h3>}
              </a>
            </div>
          )}
        </div>
      </div>
    )
  }
}
export default Display

