import asterisk from '../assets/asterisk.svg';
import balloons from '../assets/air-balloons.jpeg';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Support() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0.8, 0.4], [1, 0.8]);
  const scale = useTransform(scrollYProgress, [0.1, 0.4], [0.6, 0.9]);
  return (
    <motion.div
      ref={targetRef}
      style={{ opacity, scale }}
      className='h-[500px] flex px-10 py-[50px] m-8 bg-[#0b0f17] text-white'
    >
      <div className='grow basis-3/3 font-heading'>
        <h2 className='text-5xl'>Support</h2>
        <h2 className='text-5xl'>at every</h2>
        <h1 className='text-7xl'>Step</h1>
      </div>
      <div className='grow flex'>
        <div className='flex flex-col justify-between grow basis-6/12 space-y-4'>
          <span className='grow basis-6/12 text-md'>
            <img src={asterisk} alt='asterisk' width={40} />
            <p className='pt-3'>
              Participate in the{' '}
              <span className='underline text-[#84d7e9]'>loyalty program.</span>{' '}
              Pay for the
            </p>
            <p>service online to get bonuses for our other</p>
            <p>services. We have a lot of bonuses!</p>
          </span>
          <span className='grow basis-6/12 text-md'>
            <img src={asterisk} alt='asterisk' width={40} />
            <p className='pt-3'>You can help other people: choose a donation</p>
            <p> fund and share the link with your friends! </p>
            <p>no cost value-added services</p>
          </span>
          <button className='text-[#ff6476] border-2 border-[#ff6476] py-4 rounded-full w-[350px]'>
            Choose a fund
          </button>
        </div>
        <img
          width={200}
          src={balloons}
          alt='air balloons'
          className='img rounded-full ml-8 object-cover object-left'
        />
      </div>
    </motion.div>
  );
}
