import React from "react"
import footerStyles from "./footer.module.css"

export default () => {
  return (
    <footer id={footerStyles.footer}>
    <div id={footerStyles.address}>
      <h5>Lakeside Lumber & Hardware</h5>
      <p>49208 State Highway 38</p>
      <p>P.O. Box 295</p>
      <p>Marcell, MN 56657</p>
    </div>
    <div id={footerStyles.hours}>
      <h5>Store Hours</h5>
      <p>Mon-Fri 7:30 am - 5:00 pm</p>
      <p>Sat 8:00 am - 3:00 pm</p>
      <p>Sat Nov - Apr 8:00 am - 12:00 pm</p>
    </div>
    <div id={footerStyles.contact}>
      <h5>Contact Us</h5>
      <p><strong>Phone: </strong><br /><a href="tel:1-218-832-3300">218-832-3300</a></p>
      <p><strong>Fax: </strong><br />218-832-2302</p>
      <div>
        <a id={footerStyles.facebook} href="https://www.facebook.com/pg/LakesideMarcell/photos/?ref=page_internal" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook-square"></i></a>
        <a id={footerStyles.email} href="/contact/"><i className="fa fa-envelope-square"></i></a>
      </div>
    </div>
    <div id="map"><iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21526.37271773723!2d-93.7065875618642!3d47.591198397035534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52ba6c4ac74ae3ab%3A0x3c5a3e65b53e6902!2sLakeside%20Lumber%20%26%20Hardware%20LLC!5e0!3m2!1sen!2sus!4v1574892894472!5m2!1sen!2su" style={{border: "0px", width: "300px", height: "200px", frameborder: "0px"}}allowFullScreen=""></iframe>
    </div>
  </footer>
  )
}
/* " width="300" height="200" frameborder="0" */