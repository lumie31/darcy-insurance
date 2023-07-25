export const parent = {
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.3,
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
