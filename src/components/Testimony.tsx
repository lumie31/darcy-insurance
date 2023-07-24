import balloons from '../assets/air-balloons.jpeg';
import asterisk from '../assets/asterisk.svg';

export default function Testimony() {
  return (
    <div className='h-[500px] flex px-10 py-[50px] m-8 bg-[#0b0f17] text-white'>
      <div className='basis-3/5 flex rounded-[3rem] bg-[#1f283d] px-6 py-4'>
        <img
          width={200}
          src={balloons}
          alt='air balloons'
          className='rounded-full ml-8'
        />
        <div className='flex flex-col justify-between px-6 py-8'>
          <div>
            <h3 className='text-3xl py-2'>Georgia Darcy</h3>
            <span className='text-gray-400'>The agency founder</span>
          </div>
          <p className='text-sm'>
            With over twenty years of industry experience, 'Darcy's insurance
            products' has learned a lot. The one thing we know for sure is that
            we're all about you. If you find searching for insurance
            fruastrating, we are here to help.{' '}
          </p>
          <button className='rounded-full px-4 py-3 bg-[#84d7e9] text-black'>
            Get a consultation
          </button>
        </div>
      </div>
      <div className='flex basis-1/3 space-x-2 justify-center pt-[100px]'>
        <img src={asterisk} alt='asterisk' width={50} className='self-start' />
        <div className='text-5xl font-heading'>
          <h2>Our</h2>
          <h2>experts</h2>
          <h2>say</h2>
        </div>
      </div>
    </div>
  );
}
