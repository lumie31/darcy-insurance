import { motion, useScroll, useTransform, useAnimation } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { btnVariants } from '../utils/testimony';
import { useInView } from 'react-intersection-observer';

export default function Contact() {
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
    offset: ['start end', 'end end'],
  });

  const opacity = useTransform(scrollYProgress, [1, 0.9], [1, 0.4]);
  const scale = useTransform(scrollYProgress, [0.1, 0.4], [0.4, 1]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={controls}
      transition={{ duration: 2 }}
      viewport={{ once: false }}
      style={{ opacity, scale }}
      ref={(el) => {
        targetRef;
        ref(el);
      }}
      className='snap h-[450px] flex justify-between px-10 py-[50px] m-8 bg-[#0b0f17] text-white'
    >
      <div className='w-[500px] flex flex-col space-y-10'>
        <h2 className='py-2 text-4xl font-heading'>Need numbers?</h2>
        <div className='flex space-x-2 text-white mb-4 text-sm'>
          <motion.span
            initial='hidden'
            animate='visible'
            variants={btnVariants}
            className='rounded-full px-5 py-2 bg-white text-black'
          >
            Travel
          </motion.span>
          <motion.span
            initial='hidden'
            animate='visible'
            variants={btnVariants}
            className='rounded-full px-5 py-2 bg-[#1f283d]'
          >
            Health
          </motion.span>
          <motion.span
            initial='hidden'
            animate='visible'
            variants={btnVariants}
            className='rounded-full px-5 py-2 bg-[#1f283d]'
          >
            CASCO
          </motion.span>
          <motion.span
            initial='hidden'
            animate='visible'
            variants={btnVariants}
            className='rounded-full px-5 py-2 bg-[#1f283d]'
          >
            Mortgage
          </motion.span>
          <motion.span
            initial='hidden'
            animate='visible'
            variants={btnVariants}
            className='rounded-full px-5 py-2 bg-[#1f283d]'
          >
            Fire
          </motion.span>
        </div>
        <form className='flex text-sm space-x-6'>
          <div className='flex flex-col space-y-1'>
            <label htmlFor='' className='text-gray-400'>
              Enter the country
            </label>
            <motion.input
              initial='hidden'
              animate='visible'
              variants={btnVariants}
              type='text'
              placeholder='Australia'
              className='rounded-full px-4 py-3 w-[200px] bg-[#1F283C]'
            />
          </div>
          <div className='flex flex-col space-y-1'>
            <label htmlFor='' className='text-gray-400'>
              Choose travel dates
            </label>
            <motion.input
              initial='hidden'
              animate='visible'
              variants={btnVariants}
              type='text'
              placeholder='11 Apr - 20 Apr'
              className='rounded-full px-4 py-3 w-[200px] bg-[#1F283C]'
            />
          </div>
        </form>
        <motion.button
          initial='hidden'
          animate='visible'
          variants={btnVariants}
          className='text-white bg-[#ff6476] rounded-full py-3 w-[450px]'
        >
          Calculate
        </motion.button>
      </div>
      <div className='w-[400px] flex flex-col space-y-6'>
        <div>
          <h4 className='text-xl font-bold pb-2'>Insurance services</h4>
          <span className='flex space-x-4 text-sm text-gray-400 py-1'>
            <motion.p initial='hidden' animate='visible' variants={btnVariants}>
              Medical expenses
            </motion.p>
            <motion.p initial='hidden' animate='visible' variants={btnVariants}>
              Family health insurance
            </motion.p>
          </span>
          <span className='flex space-x-4 text-sm text-gray-400'>
            <motion.p initial='hidden' animate='visible' variants={btnVariants}>
              Vehicle loss
            </motion.p>
            <motion.p initial='hidden' animate='visible' variants={btnVariants}>
              Property damage
            </motion.p>
            <motion.p initial='hidden' animate='visible' variants={btnVariants}>
              Fire
            </motion.p>
          </span>
        </div>
        <div>
          <h4 className='text-xl font-bold pb-2'>Company</h4>
          <span className='flex space-x-4 text-sm text-gray-400'>
            <motion.p initial='hidden' animate='visible' variants={btnVariants}>
              About us
            </motion.p>
            <motion.p initial='hidden' animate='visible' variants={btnVariants}>
              Career
            </motion.p>
            <motion.p initial='hidden' animate='visible' variants={btnVariants}>
              Help
            </motion.p>
            <motion.p initial='hidden' animate='visible' variants={btnVariants}>
              FAQ
            </motion.p>
            <motion.p initial='hidden' animate='visible' variants={btnVariants}>
              Blog
            </motion.p>
          </span>
        </div>
        <div>
          <h4 className='text-xl font-bold pb-2'>Bonus</h4>
          <span className='flex space-x-4 text-sm text-gray-400'>
            <motion.p initial='hidden' animate='visible' variants={btnVariants}>
              Gift certificate
            </motion.p>
            <motion.p initial='hidden' animate='visible' variants={btnVariants}>
              Affiliate program
            </motion.p>
            <motion.p initial='hidden' animate='visible' variants={btnVariants}>
              Trainings
            </motion.p>
          </span>
        </div>
      </div>
    </motion.div>
  );
}
