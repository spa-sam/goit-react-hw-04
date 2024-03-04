import Modal from "react-modal";
import css from "./ImageModal.module.css";

function ImageModal({ isOpen, onRequestClose, imageUrl }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Modal"
      overlayClassName={css.modalOverlay}
      className={css.modalContent}
    >
      {imageUrl && <img src={imageUrl} alt="" className={css.modalImage} />}
    </Modal>
  );
}

export default ImageModal;
