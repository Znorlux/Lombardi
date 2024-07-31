import { motion } from "framer-motion";
import { opacity } from "./anim";
import styles from "./Menu.module.scss";
import Link from "./Link";

const menu = [
  {
    title: "Proyectos",
    description: "To Explore My Creations",
    images: ["projects1.jpg", "projects2.jpg"],
  },
  {
    title: "Acerca de mi",
    description: "To Discover My Journey",
    images: ["agence1.jpg", "agence2.jpg"],
  },
  {
    title: "Contacto",
    description: "To Start A Conversation",
    images: ["contact1.jpg", "contact2.jpg"],
  },
];

export default function Index() {
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
