import React from "react"
import styles from "./styles/footer.module.css"

export default () => {
  return (
    <footer id={styles.footer}>
      <div className={styles.section}>
        <h5><strong>Lakeside Lumber & Hardware</strong></h5>
        <p>XXXXX State Highway XX</p>
        <p>P.O. Box XXX</p>
        <p>Marcell, MN 56657</p>
      </div>
      <div className={styles.section}>
        <h5><strong>Store Hours</strong></h5>
        <p>Mon-Fri 7:30 am - 5:00 pm</p>
        <p>Sat 8:00 am - Noon</p>
      </div>
      <div className={styles.section}>
        <h5><strong>Contact Us</strong></h5>
        <p><i className="fa fa-phone"></i> Phone: <br /><a id={styles.phone} href="tel:1-555-555-5555">555-555-5555</a></p>
        <p><i className="fa fa-fax"></i> Fax: <br />444-444-4444</p>
        <div>
          <a id={styles.facebook} href="https://www.facebook.com/LakesideMarcell/" target="_blank" aria-label="Facebook" rel="noopener noreferrer"><i className="fa fa-facebook-square"></i></a>
          <a id={styles.email} href="/contact/" aria-label="Email"><i className="fa fa-envelope-square"></i></a>
        </div>
      </div>
      <div id={styles.map}><iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21526.37271773723!2d-93.7065875618642!3d47.591198397035534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52ba6c4ac74ae3ab%3A0x3c5a3e65b53e6902!2sLakeside%20Lumber%20%26%20Hardware%20LLC!5e0!3m2!1sen!2sus!4v1574892894472!5m2!1sen!2su" style={{ border: "0px", width: "300px", height: "200px", frameborder: "0px" }} allowFullScreen=""></iframe>
      </div>
    </footer>
  )
}