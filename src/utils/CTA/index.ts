export const parent = {
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.9,
      ease: 'easeIn',
    },
  },
  hidden: {
    opacity: 0,
    x: 100,
    y: 60,
    transition: {
      when: 'afterChildren',
    },
  },
};

export const child = {
  visible: { opacity: 1, x: 0, y: 0 },
  hidden: { opacity: 0, x: -100, y: 60 },
};

export const btnVariants = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 2,
    },
  },
  hidden: { opacity: 0, scale: 0 },
};
