import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./Context";
import { FormNextLink } from "grommet-icons";
const Modal = () => {
  const { isSideModalOpen, closeModal } = useGlobalContext();
  return (
    <div className={isSideModalOpen ? "modal-overlay show-modal":"modal-overlay "}>
      <div className="modal-container ">
        <h3>Modal Content</h3>
        <p className="content-pera">
          <span><FormNextLink color="green"  /></span>
          "Embrace the challenges, ignite your passion, and unleash your true
          potential."
          <span className="brek"></span>
          <span><FormNextLink color="green"  /></span>
          "चुनौतियों को स्वीकार करें, अपने जुनून को प्रज्वलित करें और अपनी वास्तविक क्षमता को उजागर करें।"
        </p>
        <button className="close-modal-btn" onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;
