import React from "react"
//import { Link } from "gatsby"
//import { windowsImages, windows } from "./prodData.js";
//import products from "../../pages/products.js";
import productStyles from "./products.module.css"

class Display extends React.Component {
  /* constructor(props) {
    super(props);
    this.state = {product: windows, images: windowsImages}
  } */
  
  render() {
    //this.props.product.images.map( x => console.log(x.image));
    return (
      <div>
        <div id={productStyles.header}>
          <h4 id={productStyles.productHeader}>
            {this.props.product.description}
          </h4>
        </div>
        <div id={productStyles.productImg}>
          {this.props.product.images.map( (x, i) => 
            <div className={productStyles.productImage} key={i} /* style={{maxWidth: "400px", height: "auto"}} */>
              <img src={x.image} alt={x.type} />
            </div>)}
        </div>
        <div id={productStyles.products}>
          {this.props.product.product.map( (x, i) => 
            <div key={i} id={productStyles.logoDiv}>
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

