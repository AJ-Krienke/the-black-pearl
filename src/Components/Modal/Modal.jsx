import styles from './Modal.module.css';

const Modal = props => {
  return (
    <>
      <div
        className={styles['modal-overlay']}
        role='presentation'
        onClick={props.onClick}
      >
        {props.children}
      </div>
    </>
  );
};

export default Modal;
