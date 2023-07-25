import { useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useScroll, useTransform, useAnimation } from 'framer-motion';
import lifebuoy from '../assets/lifebuoy-on-beach.avif';
import {
  cardVariants,
  textVariants,
  spanVariants,
  btnVariants,
  item,
  cardGroup,
  card,
} from '../utils/services';

export default function Services() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['end end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.2]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={controls}
      viewport={{ once: true }}
      style={{ opacity, scale }}
      ref={(el) => {
        targetRef;
        ref(el);
      }}
      className='snap flex flex-col px-10 py-[50px] m-8 bg-[#0b0f17] text-white space-y-6'
    >
      <motion.div
        initial='hidden'
        animate={controls}
        variants={cardVariants}
        className='h-[380px] flex justify-between space-x-6'
      >
        <motion.div
          variants={item}
          className='flex-1 rounded-[3rem] bg-home bg-cover bg-center bg-no-repeat flex'
        >
          <motion.span
            initial='hidden'
            animate={controls}
            variants={spanVariants}
            className='bg-black rounded-full px-6 py-3 self-end mb-6 ml-6'
          >
            Home insurance
          </motion.span>
        </motion.div>
        <motion.img
          src={lifebuoy}
          alt='lifebuoy'
          width={180}
          initial='hidden'
          animate='visible'
          variants={btnVariants}
          className='img mx-4 rounded-full object-cover object-left-bottom'
        />
        <motion.div
          variants={item}
          className='basis-1/3 rounded-[3rem] bg-[#1f283d] p-10 flex flex-col justify-between'
        >
          <div>
            <h2 className='mb-6 text-5xl font-heading'>Best Choice</h2>
            <motion.p
              initial='hidden'
              animate={controls}
              variants={textVariants}
              className='text-sm leading-relaxed'
            >
              Not all insurance are the same. That's why agency knows that your
              insurance should be customized to fit your situation.
            </motion.p>
          </div>
          <motion.button
            initial='hidden'
            animate={controls}
            variants={textVariants}
            className='bg-[#ff6476] rounded-full px-6 py-4 text-black'
          >
            View all services
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.div
        initial='hidden'
        animate={controls}
        variants={cardGroup}
        className='h-[300px] flex justify-between space-x-6'
      >
        <motion.div
          variants={card}
          className='rounded-[3rem] basis-1/3 bg-vehicle bg-cover bg-center bg-no-repeat flex'
        >
          <motion.span
            initial='hidden'
            animate={controls}
            variants={spanVariants}
            className='bg-black rounded-full px-6 py-3 self-end mb-6 ml-6'
          >
            Vehicle damage
          </motion.span>
        </motion.div>
        <motion.div
          variants={card}
          className='rounded-[3rem] basis-1/3 bg-mortgage bg-cover bg-center bg-no-repeat flex'
        >
          <motion.span
            initial='hidden'
            animate={controls}
            variants={spanVariants}
            className='bg-black rounded-full px-6 py-3 self-end mb-6 ml-6'
          >
            Mortgage insurance
          </motion.span>
        </motion.div>
        <motion.div
          variants={card}
          className='rounded-[3rem] basis-1/3 bg-medical bg-cover bg-center bg-no-repeat flex'
        >
          <motion.span
            initial='hidden'
            animate={controls}
            variants={spanVariants}
            className='bg-black rounded-full px-6 py-3 self-end mb-6 ml-6'
          >
            Medical expenses
          </motion.span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
