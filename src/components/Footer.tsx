import { motion } from 'framer-motion';
import logo from '../assets/lifebuoy.png';

export default function Footer() {
  return (
    <footer className='h-[120px] bg-gradient-to-b from-[#0b0f17] to-[#1f283d] flex justify-between items-center px-10 py-4 m-8 rounded-b-[3rem] font-sans text-sm text-white'>
      <div className='flex items-center'>
        <motion.img
          src={logo}
          alt='lifebuoy image'
          width={50}
          animate={{ rotate: 180 }}
          transition={{ repeat: Infinity, repeatType: 'reverse', duration: 5 }}
        />
        <span className='ml-4'>Darcy's insurance products</span>
      </div>
      <a className='underline'>Privacy Policy</a>
    </footer>
  );
}
