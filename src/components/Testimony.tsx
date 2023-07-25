import person from '../assets/corporate-lady.jpeg';
import asterisk from '../assets/asterisk.svg';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { textVariants } from '../utils/services';
import { parent, child, btnVariants } from '../utils/testimony';

export default function Testimony() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['end end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.2]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 2, delay: 2 }}
      style={{ opacity, scale }}
      ref={targetRef}
      className='snap h-[550px] flex px-10 py-[50px] m-8 bg-[#0b0f17] text-white'
    >
      <div className='basis-3/5 flex rounded-[3rem] bg-[#1f283d] px-6 py-10'>
        <motion.img
          initial='hidden'
          animate='visible'
          variants={btnVariants}
          width={180}
          src={person}
          alt='air balloons'
          className='rounded-full ml-8 object-cover'
        />
        <div className='flex flex-col justify-between px-14'>
          <div>
            <h3 className='text-3xl py-2 font-bold'>Georgia Darcy</h3>
            <motion.span
              initial='hidden'
              animate='visible'
              variants={textVariants}
              className='text-gray-400'
            >
              The agency founder
            </motion.span>
          </div>
          <motion.p
            initial='hidden'
            animate='visible'
            variants={textVariants}
            className='text-sm leading-relaxed'
          >
            With over twenty years of industry experience, 'Darcy's insurance
            products' has learned a lot. The one thing we know for sure is that
            we're all about you. If you find searching for insurance
            fruastrating, we are here to help.{' '}
          </motion.p>
          <motion.button
            initial='hidden'
            animate='visible'
            variants={textVariants}
            className='rounded-full px-4 py-4 bg-[#84d7e9] text-black'
          >
            Get a consultation
          </motion.button>
        </div>
      </div>
      <div className='flex basis-1/3 space-x-2 justify-center pt-[100px] ml-14'>
        <motion.img
          variants={textVariants}
          initial='hidden'
          animate='visible'
          src={asterisk}
          alt='asterisk'
          width={50}
          className='self-start'
        />
        <motion.div
          variants={parent}
          initial='hidden'
          animate='visible'
          className='text-5xl font-heading'
        >
          <motion.h2 variants={child}>Our</motion.h2>
          <motion.h2 variants={child}>experts</motion.h2>
          <motion.h2 variants={child}>say</motion.h2>
        </motion.div>
      </div>
    </motion.div>
  );
}
