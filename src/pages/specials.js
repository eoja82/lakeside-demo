import React from "react"
import Layout from "../components/layout"
import styles from "./specials.module.css"

class Specials extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isLoaded: false};
    this.refresh = this.refresh.bind(this);
  }
  refresh() {
    console.log("refresh " + this.state.isLoaded)
    if (!this.state.isLoaded) {
      this.setState({isLoaded: true});
      window.location.reload();
      /* setTimeout(function() {
        window.location.reload();
      }, 4000); */
    }
  }
  componentDidMount() {
    if (!this.state.isLoaded) {
      //this.refresh();
      //this.setState({isLoaded: true});
    }  
    console.log("didMount " + this.state.isLoaded);
  }
  componentWillUnmount() {
    this.setState({isLoaded: false});
    console.log("unMount " + this.state.isLoaded);
  } 
  render() {
    console.log("render " + this.state.isLoaded);
    return (
      <Layout>
        <div id="fb-root"></div>
        <p>Scroll to see more specials.</p>
        <div id={styles.facebook} className="fb-page" data-href="https://www.facebook.com/LakesideMarcell/" data-tabs="timeline" data-width="500" data-height="" data-small-header="true" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/LakesideMarcell/" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/LakesideMarcell/">Lakeside Lumber &amp; Hardware LLC</a></blockquote>
        </div>
        <p>If you don't see specials here click the link above to see our specials on Facebook.</p>
        <button onClick={this.refresh}>Button</button>
      </Layout>
    )
  }
}
export default Specials