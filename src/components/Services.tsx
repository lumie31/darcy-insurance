import lifebuoy from '../assets/lifebuoy-on-beach.avif';

export default function Services() {
  return (
    <div className='flex flex-col px-10 py-[50px] m-8 bg-[#0b0f17] text-white space-y-4'>
      <div className='h-[350px] flex justify-between'>
        <div className='basis-1/2 rounded-[3rem] bg-home bg-cover bg-center bg-no-repeat flex'>
          <span className='bg-black rounded-full px-6 py-3 self-end mb-6 ml-6'>
            Home insurance
          </span>
        </div>
        <img
          src={lifebuoy}
          alt='lifebuoy'
          width={200}
          className='mx-4 rounded-full shadow-xl shadow-[#84d7e9]'
        />
        <div className='basis-2/5 rounded-[3rem] bg-[#1f283d] p-6 flex flex-col justify-between'>
          <div>
            <h2 className='mb-6 text-5xl font-heading'>Best Choice</h2>
            <p className='text-md'>
              Not all insurance are the same. That's why agency knows that your
              insurance should be customized to fit your situation.
            </p>
          </div>
          <button className='bg-[#ff6476] rounded-full px-6 py-3 text-black'>
            View all services
          </button>
        </div>
      </div>

      <div className='h-[300px] flex justify-between space-x-4'>
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
    </div>
  );
}
