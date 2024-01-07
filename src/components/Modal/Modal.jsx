import Modal from 'react-modal';

Modal.setAppElement('#root');

export const ModalForm = ({ modalIsOpen, closeModal, largeImg, tags }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={{
        overlay: {
          position: 'fixed',
          top: '0',
          left: '0',
          width: '100vw',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(128, 128, 128, 0.12)',
          zIndex: '1200',
        },
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      }}
      contentLabel="Example Modal"
    >
      <img src={largeImg} alt={tags} />
    </Modal>
  );
};