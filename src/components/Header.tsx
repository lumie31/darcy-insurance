import key from '../assets/key-icon.png';
import logo from '../assets/lifebuoy.png';
import { motion } from 'framer-motion';
import { parent, child } from '../utils';

export default function Header() {
  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.2,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: 'afterChildren',
      },
    },
  };

  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  };

  return (
    <header className='h-[120px] bg-gradient-to-b from-[#1f283d] to-[#0b0f17] flex justify-between items-center px-10 py-4 m-8 rounded-t-[3rem] font-sans text-sm text-white'>
      <motion.img
        animate={{ rotate: 180 }}
        transition={{ repeat: 2, duration: 5 }}
        src={logo}
        alt='lifebuoy image'
        width={50}
      />
      <motion.ul
        initial='hidden'
        animate='visible'
        variants={list}
        className='flex space-x-12 mx-8 cursor-pointer'
      >
        <motion.li variants={item} className='font-bold'>
          Home
        </motion.li>
        <motion.li variants={item} className='flex items-center'>
          Services &nbsp;
          <span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-4 h-4'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M19.5 8.25l-7.5 7.5-7.5-7.5'
              />
            </svg>
          </span>
        </motion.li>
        <motion.li variants={item}>About us</motion.li>
        <motion.li variants={item}>Blog</motion.li>
        <motion.li variants={item}>Career</motion.li>
      </motion.ul>
      <motion.div
        variants={parent}
        initial='hidden'
        animate='visible'
        className='flex space-x-10'
      >
        <motion.button
          variants={child}
          className='rounded-full bg-[#84d7e9] px-12 py-4 text-black font-bold'
        >
          Contact us
        </motion.button>
        <motion.button variants={child} className='flex items-center space-x-2'>
          <img src={key} alt='key icon' width={15} />
          <span>Login</span>
        </motion.button>
      </motion.div>
    </header>
  );
}
