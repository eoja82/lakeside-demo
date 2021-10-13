import React from "react";
import styles from "./styles/getQuote.module.css";

function Quote() {
  return (
    <div>
      {/* Button triggers modal */}
      <button type="button" className="btn btn-primary" id={styles.button} data-toggle="modal" data-target="#quoteModal">Get A Quote</button>

      {/* modal */}
      <div className="modal fade" id="quoteModal" tabIndex="-1" role="dialog" aria-labelledby="modalTitle" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content" id={styles.modalContent}>
            <div className="modal-header" id={styles.modalHeader}>
              <h4 className="modal-title" id="modalTitle">Please call or email us for a quote:</h4>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span id={styles.close} aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p><a href="tel:1-555-555-5555" style={{color: "#3e3e3e", fontSize: "larger"}}><i className="fa fa-phone"></i> 1-555-555-5555</a></p>
              <p><a href="mailto:john@fakeemail.com" style={{color: "#3e3e3e", fontSize: "larger"}}><i className="fa fa-envelope-square"></i> john@fakeemail.com</a></p>
            </div>
            <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">Close</button>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Quote;