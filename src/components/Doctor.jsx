import React from 'react'

const Doctor = () => {
    return (
        <div className='flex flex-col md:flex-row gap-30 py-2 text-gray-700'>
          
            <div>
             <h1 className='text-3xl  text-cyan-700 py-2 font-bold '>DR. YOGIN BALDANIYA</h1>
             <p className='font-sans font-medium'>Dr. Yogin Baldaniya, a dedicated homoeopathic practitioner, completed his studies at Pioneer Homoeopathic Medical College, gaining in-depth knowledge of holistic healing. With a strong foundation in treating various diseases, he has enriched his clinical experience through multiple internships. He trained for one year under Dr. Amit Gohel at Satyam Homoeopathy, followed by six months at Shreeji Homoeopathy under Dr. Jitesh Chosaliya, and another six months at Samarth Homoeopathy under Dr. Suketu Shashtri. Through these experiences, Dr. Yogin has developed expertise in providing comprehensive homoeopathic solutions for a wide range of ailments, ensuring effective and personalized patient care.</p>
            </div>
            <div>
                <img className='w-full sm:w-250 md:w-500 h-auto rounded-full mb-2 drop-shadow-[0_0px_50px_rgb(26,105,167)]' src="./src/assets/profile_pic.jpg" alt="" srcset="" />
            </div>
        </div>
    )
}

export default Doctor
