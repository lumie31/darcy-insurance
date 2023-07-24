export default function Contact() {
  return (
    <div className='h-[450px] flex justify-between px-10 py-[50px] m-8 bg-[#0b0f17] text-white'>
      <div className='w-[500px] flex flex-col space-y-10'>
        <h2 className='py-2 text-4xl font-heading'>Need numbers?</h2>
        <div className='flex space-x-2 text-white mb-4 text-sm'>
          <span className='rounded-full px-5 py-2 bg-white text-black'>
            Travel
          </span>
          <span className='rounded-full px-5 py-2 bg-[#1f283d]'>Health</span>
          <span className='rounded-full px-5 py-2 bg-[#1f283d]'>CASCO</span>
          <span className='rounded-full px-5 py-2 bg-[#1f283d]'>Mortgage</span>
          <span className='rounded-full px-5 py-2 bg-[#1f283d]'>Fire</span>
        </div>
        <form className='flex text-sm space-x-6'>
          <div className='flex flex-col space-y-1'>
            <label htmlFor=''>Enter the country</label>
            <input
              type='text'
              placeholder='Australia'
              className='rounded-full px-4 py-3 w-[200px] bg-[#1F283C]'
            />
          </div>
          <div className='flex flex-col space-y-1'>
            <label htmlFor=''>Choose travel dates</label>
            <input
              type='text'
              placeholder='11 Apr - 20 Apr'
              className='rounded-full px-4 py-3 w-[200px] bg-[#1F283C]'
            />
          </div>
        </form>
        <button className='text-white bg-[#ff6476] rounded-full px-5 py-3  w-[350px]'>
          Calculate
        </button>
      </div>
      <div className='w-[400px] flex flex-col space-y-6'>
        <div>
          <h4 className='text-3xl font-extrabold'>Insurance services</h4>
          <span className='flex space-x-4 text-sm text-gray-400 py-1'>
            <p>Medical expenses</p>
            <p>Family health insurance</p>
          </span>
          <span className='flex space-x-4 text-sm text-gray-400'>
            <p>Vehicle loss</p>
            <p>Property damage</p>
            <p>Fire</p>
          </span>
        </div>
        <div>
          <h4 className='text-3xl font-extrabold'>Company</h4>
          <span className='flex space-x-4 text-sm text-gray-400'>
            <p>About us</p>
            <p>Career</p>
            <p>Help</p>
            <p>FAQ</p>
            <p>Blog</p>
          </span>
        </div>
        <div>
          <h4 className='text-2xl font-bold'>Bonus</h4>
          <span className='flex space-x-4 text-sm text-gray-400'>
            <p>Gift certificate</p>
            <p>Affiliate program</p>
            <p>Trainings</p>
          </span>
        </div>
      </div>
    </div>
  );
}
