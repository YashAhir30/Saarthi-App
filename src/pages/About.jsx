import React from 'react'
import { assets } from '../assets/assets'

const about = () => {
  return (
    <div >
      <div>
        <p className='text-2xl text-center pt-10 text-gray-500'>
          ABOUT
          <span className='text-cyan-900 font-medium'>
            US
          </span>
        </p>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-10'>
        <img className="w-full md:max-w-[360px]" src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Lorem ipsum dolorilique quod reprehenderit minus animi enim vitae ut consectetur! Vitae perspiciatis culpa beatae. Iure neque at debitis, enim, earum eum suscipit temporibus quasi atque consequatur accusamus voluptatibus quo praesentium quam molestiae! Quia quaerat nam voluptatem eius at rerum deserunt molestias doloremque natus.</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum natus totam inventore? Recusandae corrupti, non inventore soluta ipsam illum voluptatum minus, voluptas accusamus magni doloremque ratione! Earum cumque sint at.</p>
          <b className='text-cyan-900'>Our Vision</b>
          <p>Lorem ipsum dolor sit amet consest eos dicta eum eveniet. Quia adipisci praesentium nulla voluptas quo. Natus quisquam veniam id. Nulla possimus illo, voluptatibus aliquid architecto, perferendis quasi assumenda voluptas blanditiis sint deserunt aperiam tempore sed quam unde velit ducimus, dolore veritatis consequatur numquam id cumque recusandae hic!</p>
        </div>
      </div>
      <div className='text-xl my-4'>
        <p>WHY <span className='text-cyan-900 font-semibold'>CHOOSE US</span></p>
      </div>
      <div className='flex flex-col md:flex-row mb-20'>
      <div className='border border-gray-300 px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-6 text-[15px] hover:bg-cyan-600 hover:text-white transition-all duretion-300 ease-in-out text-color-gray-600 cursor-pointer'>
        <b>Efficiency</b>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, numquam? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, minus.</p>

      </div>
      <div className='border border-gray-300 px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-6 text-[15px] hover:bg-cyan-600 hover:text-white transition-all duretion-300 ease-in-out text-color-gray-600 cursor-pointer'>
        <b>Convenience</b>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, est! Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, ab!</p>
      </div>
      <div className='border border-gray-300 px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-6 text-[15px] hover:bg-cyan-600 hover:text-white transition-all duretion-300 ease-in-out text-color-gray-600 cursor-pointer'>
        <b>
          Personalization:
        </b>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, quasi? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, quae?</p>
      </div>
    </div>


    </div >
  )
}

export default about
