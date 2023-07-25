// For Services component
export const cardGroup = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.2,
      when: 'beforeChildren',
      staggerChildren: 0.2,
      delay: 0.5,
    },
  },
  hidden: { opacity: 0, scale: 0, transition: { when: 'afterChildren' } },
};

export const card = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 170 },
};

export const cardVariants = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      when: 'beforeChildren',
      staggerChildren: 0.2,
      delay: 0.1,
    },
  },
  hidden: { opacity: 0, scale: 0, transition: { when: 'afterChildren' } },
};

export const item = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 170 },
};

// Also used by Testimony component
export const textVariants = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 3,
    },
  },
  hidden: { opacity: 0, scale: 0 },
};

export const spanVariants = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 4,
    },
  },
  hidden: { opacity: 0, scale: 0 },
};
