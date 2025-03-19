import styles from "../css/images.module.css";
import { SnackType } from "../App";
import { useEffect, useRef } from "react";

interface DialogPropType {
  clicked: SnackType | null;
  dialogRef: React.MutableRefObject<null>;
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Dialog = ({
  isModalOpen,
  setIsModalOpen,
  clicked,
  dialogRef,
}: DialogPropType) => {
  const closeModal = () => {
    dialogRef.current?.close();
    setIsModalOpen(false);
  };

  const dialogScrollRef = useRef(null);

  const clickedOutsideModal = (e) => {
    if (
      isModalOpen &&
      dialogRef.current &&
      !dialogRef.current.contains(e.target)
    ) {
      closeModal();
      setIsModalOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", clickedOutsideModal);

    return () => {
      document.removeEventListener("mousedown", clickedOutsideModal);
    };
  }, [clicked]);

  useEffect(() => {
    dialogScrollRef.current.scrollTop = 0;
  }, [clicked]);

  return (
    <dialog className={styles.dialog} ref={dialogRef}>
      <div onClick={() => closeModal()} className={styles["dialog-close"]}>
        X
      </div>
      <div className={styles["dialog-content"]}>
        <p className={styles["dialog-title"]}>{clicked?.title}</p>
        <div ref={dialogScrollRef} className={styles["dialog-container"]}>
          <img src={clicked?.fileName} />
          <p className={styles["dialog-text"]}>{clicked?.description}</p>
        </div>
        <a className={styles["dialog-btn"]} href={clicked?.link}>
          Buy Now
        </a>
      </div>
    </dialog>
  );
};

export default Dialog;
