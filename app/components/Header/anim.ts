const transition = { duration: 1, ease: [0.76, 0, 0.24, 1] };

export const opacity = {
  initial: {
    opacity: 0,
  },
  open: {
    opacity: 1,
    transition: { duration: 0.35 },
  },
  closed: {
    opacity: 0,
    transition: { duration: 0.35 },
  },
};

export const height = {
  initial: {
    height: 0,
  },
  enter: {
    height: "auto",
    transition,
  },
  exit: {
    height: 0,
    transition,
  },
};

export const background = {
  initial: {
    height: 0,
  },
  open: {
    height: "100vh",
    transition,
  },
  closed: {
    height: 0,
    transition,
  },
};

export const translate = {
  initial: {
    y: "100%",
    opacity: 0,
  },
  enter: (i: number[]) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: i[0] },
  }),
  exit: (i: number[]) => ({
    y: "100%",
    opacity: 0,
    transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: i[1] },
  }),
};

export const slideLeft = {
  initial: {
    x: 150,
  },
  enter: {
    x: 0,
    transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] },
  },
  exit: {
    x: 150,
    transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] },
  },
};

export const rotateX = {
  initial: {
    rotateX: 90,
    opacity: 0,
  },
  enter: (i: number) => ({
    rotateX: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.33, 1, 0.68, 1],
      delay: 0.3 + i * 0.05,
    },
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] },
  },
};

export const mountAnim = { initial: "initial", animate: "enter", exit: "exit" };
