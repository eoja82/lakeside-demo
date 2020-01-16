import React from "react";
import Helmet from "react-helmet";
//import styles from "./styles/getQuote.module.css";

class Quote extends React.Component {
  constructor(props) {
    super(props);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  openModal() {
    document.getElementById("modal").style.display = "block";
  }
  closeModal(e) {
    let modal = document.getElementById("modal");
    let xClose = document.getElementById("xClose");
    if (e.target === modal || e.target === xClose) {
      modal.style.display = "none";
    }
  }
  componentDidMount() {
    window.addEventListener("click", this.closeModal);
  }
  render() {
    return (
      <div>
        <Helmet>
          <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" /> 
        </Helmet>
        {/* open modal */}
        <button className="w3-button w3-round w3-blue w3-border w3-border-white w3-hover-green" onClick={this.openModal}>Get A Quote</button>
        {/* the modal */}
        <div id="modal" onClick={this.closeModal} className="w3-modal w3-animate-zoom">
          <div className="w3-modal-content w3-card-4">
            <header className="w3-container w3-blue">
              <span id="xClose" onClick={this.closeModal} className="w3-button w3-display-topright">&times;</span>
              <p><h2>Please call or email us for a quote:</h2></p>
            </header>
            <div className="w3-container">
              <p><a href="tel:1-218-832-3300"><i className="fa fa-phone"></i> 1-218-832-3300</a></p>
              <p><a href="mailto:eric@lakesidemarcell.com"><i className="fa fa-envelope-square"></i> eric@lakesidemarcell.com</a></p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Quote;