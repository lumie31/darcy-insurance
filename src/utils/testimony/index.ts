export const parent = {
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.3,
      // duration: 1.2,
      delay: 0.3,
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
  visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.5 } },
  hidden: { opacity: 0, x: 100 },
};
