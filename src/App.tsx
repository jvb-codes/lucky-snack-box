import { useEffect, useState, useRef } from "react";
import "./App.css";
import styles from "./css/images.module.css";
import Dialog from "./components/Dialog";
import snackList from "./data/snackList";
import Overlay from "./components/Overlay";
import image from "./assets/alfort original.jpg";

class Snack {
  id: string;
  fileName: string;
  title: string;
  description: string;
  isHover: boolean;
  link: string;

  constructor(fileName: string, description: string, link: string) {
    this.id = fileName;
    this.fileName = "/mysteryBox/feb2025/" + fileName + ".jpg";
    this.title = fileName.toUpperCase();
    this.isHover = false;
    this.description = description;
    this.link = link;
  }
}

export interface SnackType {
  id: string;
  fileName: string;
  title: string;
  description: string;
  isHover: boolean;
  link: string;
}

function App() {
  const [snacksArr, setSnacksArr] = useState<null | SnackType[]>(null);
  const [clicked, setClicked] = useState<SnackType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dialogRef = useRef(null);

  useEffect(() => {
    const snacks = snackList.map((item) => {
      return new Snack(item.name, item.description, item.link);
    });

    setSnacksArr(snacks);
  }, []);

  const onHover = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    const update = snacksArr?.map((snack) => {
      if (e.target.id === snack.id) {
        return { ...snack, isHover: true };
      }
      return snack;
    });
    if (update) {
      setSnacksArr(update);
    }
  };

  const onLeave = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    const update = snacksArr?.map((snack) => {
      if (e.target.id === snack.id) {
        return { ...snack, isHover: false };
      }
      return snack;
    });
    if (update) {
      setSnacksArr(update);
    }
  };

  const displayProductInfo = (id: string) => {
    const selected = snacksArr?.find((snack) => snack.id === id);
    setClicked(selected);
  };

  const openModal = (e) => {
    dialogRef.current?.show();
    displayProductInfo(e.target.id);
    setIsModalOpen(true);
  };

  const images = snacksArr?.map((snack) => {
    console.log(snacksArr);
    return (
      <div key={snack.title} style={{ position: "relative" }}>
        {snack.isHover ? (
          <span className={`material-symbols-outlined ${styles["add-icon"]}`}>
            add_circle
          </span>
        ) : null}

        <div className={styles["img-container"]}>
          <img
            id={snack.id}
            onClick={(e) => openModal(e)}
            onMouseEnter={(e) => onHover(e)}
            onMouseLeave={(e) => onLeave(e)}
            src={snack.fileName}
            className={styles.img}
          />
          <p className={styles["snack-titles"]}>{snack.title}</p>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.grid}>{images}</div>
        {isModalOpen ? <Overlay /> : null}
        <Dialog
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          clicked={clicked}
          dialogRef={dialogRef}
        />
      </div>
    </>
  );
}

export default App;
