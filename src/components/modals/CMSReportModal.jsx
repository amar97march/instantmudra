import React, { useRef } from "react";
import ReactDom from "react-dom";
import CircleCloseIcon from "../../assets/images/circle-close.svg"
import PdfSampleImage from "../../assets/images/pdf-sample.png"


export const Modal = ({ setShowModal }) => {
  // close the modal when clicking outside the modal.
  const modalRef = useRef();
  const closeModal = (e) => {
    if (e.target === modalRef.current) {
        setShowModal(false);
    }
  };
  //render the modal JSX in the portal div.
  return ReactDom.createPortal(
    <div className="modal-container" ref={modalRef} onClick={closeModal}>
      <div className="modal">
        <div className="modal-inner">
        <div className="header">
            <div/>
            <div>View</div>
            <div>
            <button onClick={() => setShowModal(false)}><img src={CircleCloseIcon} /></button>
            </div>
        </div>
        <div className="print-btn-section">
            <div className="col-6" style={{textAlign: 'right', paddingRight: '10px'}}>
                <button className="thermal-print-btn">
                    Thermal Print
                </button>
            </div>
            <div className="col-6" style={{textAlign: 'left', paddingLeft: '10px'}}>
                <button className="horizontal-print-btn">
                    Horizontal Print
                </button>
            </div>
        </div>
        <div>
            <img style={{width: '100%'}} src={PdfSampleImage} />
        </div>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
};