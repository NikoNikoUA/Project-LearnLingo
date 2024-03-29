import Modal from "react-modal";

export const BasicModal = ({ isOpen, onRequestClose, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Basic modal"
    >
      {children}
    </Modal>
  );
};
