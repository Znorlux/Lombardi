import { motion } from "framer-motion";
import { opacity, slideLeft, mountAnim } from "./anim";
import styles from "./style.module.scss";
import Link from "./Link";
import { useState } from "react";

const menu = [
  {
    title: "Projects",
    description: "To See Everything",
    images: ["projects1.jpg", "projects2.jpg"],
  },
  {
    title: "Agence",
    description: "To Learn Everything",
    images: ["agence1.jpg", "agence2.jpg"],
  },
  {
    title: "Contact",
    description: "To Send a FAX",
    images: ["contact1.jpg", "contact2.jpg"],
  },
];

export default function index() {
  return (
    <motion.div
      className={styles.menu}
      variants={opacity}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      {/* TODO: Implementar animacion de letra a letra*/}
      <div className={styles.body}>
        {menu.map((el, index) => {
          return <Link data={el} index={index} key={index} />;
        })}
      </div>
    </motion.div>
  );
}
