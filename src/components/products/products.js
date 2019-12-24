import React from "react"
//import { Link } from "gatsby"
//import { windowsImages, windows } from "./prodData.js";
//import products from "../../pages/products.js";
import styles from "./products.module.css"

class Display extends React.Component {
  /* constructor(props) {
    super(props);
    this.state = {product: windows, images: windowsImages}
  } */
  
  render() {
    //this.props.product.images.map( x => console.log(x.image));
    return (
      <div id={styles.container}>
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

