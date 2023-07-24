import asterisk from '../assets/asterisk.svg';
import balloons from '../assets/air-balloons.jpeg';
import { motion } from 'framer-motion';

export default function CTA() {
  const parent = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.3,
      },
    },
    hidden: {
      opacity: 0,
      x: 100,
      transition: {
        when: 'afterChildren',
      },
    },
  };

  const child = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  };
  return (
    <div className='flex px-10 py-[50px] m-8 bg-[#0b0f17] text-white'>
      <motion.div
        variants={parent}
        initial='hidden'
        animate='visible'
        className='grow basis-1/2 text-8xl font-heading pr-4'
      >
        <motion.h1 variants={child}>Darcy's</motion.h1>
        <motion.h1 variants={child}>insurance</motion.h1>
        <motion.h1 variants={child}>products</motion.h1>
      </motion.div>
      <div className='grow basis-2/5 flex'>
        <motion.div
          variants={parent}
          initial='hidden'
          animate='visible'
          className='flex flex-col justify-between grow basis-6/12 space-y-4'
        >
          <motion.span variants={child} className='grow basis-6/12 text-lg'>
            <motion.img
              animate={{ rotate: 180 }}
              transition={{ from: 90, duration: 3 }}
              src={asterisk}
              alt='asterisk'
              width={40}
            />
            <p className='pt-3'>
              Our <span className='underline text-[#84d7e9]'>plans</span> are
              saving
            </p>
            <p>policyholders 30% - 60%</p>
            <p>on premiums</p>
          </motion.span>
          <motion.span variants={child} className='grow basis-6/12 text-lg'>
            <motion.img
              animate={{ rotate: 180 }}
              transition={{ from: 90, duration: 5 }}
              src={asterisk}
              alt='asterisk'
              width={40}
            />
            <p className='pt-3'>We offer a choice of low</p>
            <p> dedactibles and include </p>
            <p>no cost value-added services</p>
          </motion.span>
          <motion.svg
            variants={child}
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='currentColor'
            className='w-8 h-20 bg-[#1f283d] rounded-full cursor-pointer'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3'
            />
          </motion.svg>
        </motion.div>
        <img
          width={200}
          src={balloons}
          alt='air balloons'
          className='rounded-full ml-8 shadow-xl shadow-[#84d7e9]'
        />
      </div>
    </div>
  );
}
