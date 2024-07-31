"use client";
import styles from "./nav.module.scss";
import { motion } from "framer-motion";
import { height } from "../anim";
import Menu from "./Menu/Index";

export default function Index() {
  return (
    <motion.div
      variants={height}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.nav}
    >
      <div className={styles.container}>
        <Menu />
      </div>
    </motion.div>
  );
}
