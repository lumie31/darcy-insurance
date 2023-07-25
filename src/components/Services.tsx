import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import lifebuoy from '../assets/lifebuoy-on-beach.avif';

export default function Services() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0.5, 0.9], [1, 0.2]);
  const scale = useTransform(scrollYProgress, [0.1, 0.4], [0.8, 1]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      style={{ opacity, scale }}
      ref={targetRef}
      transition={{
        type: 'spring',
        bounce: 0.4,
        duration: 0.8,
      }}
      className='snap flex flex-col px-10 py-[50px] m-8 bg-[#0b0f17] text-white space-y-6'
    >
      <motion.div className='h-[380px] flex justify-between space-x-6'>
        <div className='flex-1 rounded-[3rem] bg-home bg-cover bg-center bg-no-repeat flex'>
          <span className='bg-black rounded-full px-6 py-3 self-end mb-6 ml-6'>
            Home insurance
          </span>
        </div>
        <img
          src={lifebuoy}
          alt='lifebuoy'
          width={180}
          className='img mx-4 rounded-full object-cover object-left-bottom'
        />
        <div className='basis-1/3 rounded-[3rem] bg-[#1f283d] p-10 flex flex-col justify-between'>
          <div>
            <h2 className='mb-6 text-5xl font-heading'>Best Choice</h2>
            <p className='text-sm leading-relaxed'>
              Not all insurance are the same. That's why agency knows that your
              insurance should be customized to fit your situation.
            </p>
          </div>
          <button className='bg-[#ff6476] rounded-full px-6 py-4 text-black'>
            View all services
          </button>
        </div>
      </motion.div>

      <div className='h-[300px] flex justify-between space-x-6'>
        <div className='rounded-[3rem] basis-1/3 bg-vehicle bg-cover bg-center bg-no-repeat flex'>
          <span className='bg-black rounded-full px-6 py-3 self-end mb-6 ml-6'>
            Vehicle damage
          </span>
        </div>
        <div className='rounded-[3rem] basis-1/3 bg-mortgage bg-cover bg-center bg-no-repeat flex'>
          <span className='bg-black rounded-full px-6 py-3 self-end mb-6 ml-6'>
            Mortgage insurance
          </span>
        </div>
        <div className='rounded-[3rem] basis-1/3 bg-medical bg-cover bg-center bg-no-repeat flex'>
          <span className='bg-black rounded-full px-6 py-3 self-end mb-6 ml-6'>
            Medical expenses
          </span>
        </div>
      </div>
    </motion.div>
  );
}
