// import React, { useState } from 'react'
// import { assets } from '../assets/assets'
// import { useEffect } from 'react'

// const Appointment = () => {


//   const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
//   const [docSlots, setDocSlots] = useState([])
//   const [slotIndex, setSlotIndex] = useState(0)
//   const [slotTime, setSlotTime] = useState('')

//   const getAvailableSlots = async () => {
//     setDocSlots([])
//     //getting current date
//     let today = new Date();
//     for (let i = 0; i < 7; i++) {
//       //getting date index 
      
//       let currentDate = new Date(today);
//       currentDate.setDate(today.getDate() + i)

//       let endTime = new Date()
//       endTime.setDate(today.getDate() + i)
//       endTime.setHours(20, 30, 0, 0)
//       // setDocSlots(prevSlots => [...prevSlots, { date: currentDate, slots }]);
//       if (today.getDate() === currentDate.getDate()) {
//         currentDate.setHours(currentDate.getHours() > 9 ? currentDate.getHours() + 1 : 9)
//         currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
//         let timeSlotes = []
   
//         while (currentDate.getHours() > 17 && currentDate.getHours() < 21) {
//           let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
//           //add slots to array
//           timeSlotes.push({
//             datetime: new Date(currentDate),
//             time: formattedTime
//           })
//           //Incrementing 30 minutes
//           currentDate.setMinutes(currentDate.getMinutes() + 30)
//         }
//         // setDocSlots(prev => [...prev, timeSlotes]);
      
//         while (currentDate.getHours() < 13 && currentDate.getHours() < 21) {
//           let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
//           //add slots to array
//           timeSlotes.push({
//             datetime: new Date(currentDate),
//             time: formattedTime
//           })
//           //Incrementing 30 minutes
//           currentDate.setMinutes(currentDate.getMinutes() + 30)
//         }
//         setDocSlots(prev => [...prev, timeSlotes]);
//       }
//       else {
//         currentDate.setHours(9)
//         currentDate.setMinutes(30)
//         console.log("next day")
//         while (currentDate<endTime ) {
//           let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
//           //add slots to array
//           console.log("whie")
//           timeSlotes.push({
//             datetime: new Date(currentDate),
//             time: formattedTime
//           })
//           console.log("next")
//           //Incrementing 30 minutes
//           currentDate.setMinutes(currentDate.getMinutes() + 30)
//         }
//         setDocSlots(prev => [...prev, timeSlotes]);
//       }
    
    
    
//     }




//   }
//   useEffect(() => {
//     getAvailableSlots();
//   }, [])
//   useEffect(() => { console.log(docSlots) }, [docSlots])
//   return (
//     <div>
//       <div className='flex flex-col sm:flex-row gap-4'>
//         <div>
//           <img className=' w-full sm:max-w-72 rounded-lg' src="./src/assets/yoginAppoinment.jpg" alt="" />
//         </div>
//         <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
//           <p className='flex items-center gap-2 text-2xl font-medium text-gray-900 '>
//             Dr. Yogin Baldaniya
//             <img className='w-5' src={assets.verified_icon} alt="" />
//           </p>
//           <div>
//             <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>B.H.M.S<br />S.C.P.H(ICHM,UNITED NATION)</p>
//             <button className='py-0.5 px-2 border text-xs rounded-full'>3 Years</button>
//           </div>
//           <div className='flex flex-col  gap-1 text-sm font-medium mt-3 text-gray-900'>
//             <div className='flex gap-1 '>
//               About
//               <img src={assets.info_icon} alt="" /></div>
//             <p className='text-sm text-gray-500 max-w-[700px] mt-1'>Dr. Yogin Baldaniya, a dedicated homoeopathic practitioner, completed his studies at Pioneer Homoeopathic Medical College, gaining in-depth knowledge of holistic healing. With a strong foundation in treating various diseases, he has enriched his clinical experience through multiple internships.</p>
//           </div>
//           <p className='text-gray-500 pt-3'>Appointment fee: <span className='text-black'>500 ₹</span></p>
//         </div>
//       </div>
//       <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700 '>
//         <p>Booking slots</p>
//         <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
//           {
//             docSlots.map((item, index) => (
//               <div onClick={() => setSlotIndex(index)} key={index} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? 'bg-cyan-600 text-white' : 'border border-gray-200'}`}>
//                 <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
//                 <p>{item[0] && item[0].datetime.getDate()}</p>

//               </div>
//             ))
//           }
//         </div>
//         <div className='flex items-center gap-3 w-full overflow-x-scroll mt-4'>
//           {docSlots.length && docSlots[slotIndex].map((item, index) => (
//             <p onClick={() => setSlotTime(item.time)} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-cyan-600 text-white' : 'text-gray-400 border border-gray-300 '}`}>
//               {item.time.toLowerCase()}
//             </p>
//           ))}
//         </div>
//         <button className='bg-cyan-600 text-white mt-4 text-sm font-light px-14 py-3 rounded-full '>Book Appoinment</button>
//       </div>
//     </div>

//   )
// }
// export default Appointment

import React, { useState, useEffect } from 'react';
import { assets } from '../assets/assets';

const Appointment = () => {
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState('');

  const getAvailableSlots = () => {
    let today = new Date();
    let slotsArray = [];

    for (let i = 0; i < 7; i++) {
      let currentDate = new Date();
      currentDate.setDate(today.getDate() + i);
      let day = currentDate.getDay();
      let timeSlots = [];

      let startTime = new Date(currentDate);
      let endTime = new Date(currentDate);

      if (day === 0) { // Sunday: 9:30 AM - 1:00 PM
        startTime.setHours(10, 0, 0, 0);
        endTime.setHours(13, 0, 0, 0);
      } else { // Monday - Saturday: 9:30 AM - 8:30 PM with lunch break
        startTime.setHours(9, 30, 0, 0);
        endTime.setHours(20, 30, 0, 0);
      }

      if (i === 0) { // If today, filter out past slots
        let currentHour = today.getHours();
        let currentMinutes = today.getMinutes();
        startTime.setHours(currentHour, currentMinutes, 0, 0);
        if (currentHour >= 13 && currentHour < 17) {
          startTime.setHours(17, 0, 0, 0);
        }
      }

      while (startTime < endTime) {
        let formattedTime = startTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        // Skip slot generation between 1:00 PM - 5:00 PM (Lunch Break)
        if (!(startTime.getHours() >= 13 && startTime.getHours() < 17)) {
          timeSlots.push({ datetime: new Date(startTime), time: formattedTime });
        }

        startTime.setMinutes(startTime.getMinutes() + 30);
      }

      slotsArray.push(timeSlots);
    }
    setDocSlots(slotsArray);
  };

  useEffect(() => {
    getAvailableSlots();
  }, []);

  return (
    <div>
      <div className='flex flex-col sm:flex-row gap-4'>
        <div>
          <img className='w-full sm:max-w-72 rounded-lg' src="./src/assets/yoginAppoinment.jpg" alt="Doctor" />
        </div>
        <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[80px] sm:mt-0'>
          <p className='flex items-center gap-2 text-2xl font-medium text-gray-900 '>
            Dr. Yogin Baldaniya <img className='w-5' src={assets.verified_icon} alt="Verified" />
          </p>
          <div>
            <p className='text-2xl font-medium text-gray-900'>B.H.M.S<br />S.C.P.H (ICHM, UNITED NATION)</p>
            <button className='py-0.5 px-2 border text-xs rounded-full'>3 Years</button>
          </div>
          <div className='flex flex-col  gap-1 text-sm font-medium mt-3 text-gray-900'>
            <div className='flex gap-1 '>
               About
               <img src={assets.info_icon} alt="" /></div>
             <p className='text-sm text-gray-500 max-w-[700px] mt-1'>Dr. Yogin Baldaniya, a dedicated homoeopathic practitioner, completed his studies at Pioneer Homoeopathic Medical College, gaining in-depth knowledge of holistic healing. With a strong foundation in treating various diseases, he has enriched his clinical experience through multiple internships.</p>
           </div>
         
            <div>
          <p className='flex flex-col  gap-1 text-sm font-medium mt-3 text-gray-900 flex'>Contact For Appointment</p>
          <ul  className='flex gap-5 align-center pt-3'>
            <li>
              <a href="tel:8733905727">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="gray" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-phone w-7 hover:text-cyan-600">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/saarthihomoeopathy/">
                <svg
                  class="w-6  hover:text-cyan-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="gray"
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="mailto:saarthihomoeopathy.33@gmail.com" target="_blank">
                <svg
                  class="w-7 hover:text-cyan-600 "
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="gray"
                    d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/+918733905727?text=Hi, How are you?"
                target="_blank"
              >
                <svg

                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="whatsapp"
                  class="svg-inline--fa fa-whatsapp fa-w-14 w-7 hover:text-cyan-600"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="gray"
                    d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
                  ></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>
        </div>
      </div>
      <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
        {/* <p>Booking slots</p>
        <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
          {docSlots.map((item, index) => (
            <div onClick={() => setSlotIndex(index)} key={index} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? 'bg-cyan-600 text-white' : 'border border-gray-200'}`}>

              <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
              <p>{item[0] && item[0].datetime.getDate()}</p>
            </div>
          ))}
        </div>
        <div className='flex items-center gap-3 w-full overflow-x-scroll mt-4'>
          {docSlots.length && docSlots[slotIndex].map((item, index) => (
            <p key={index} onClick={() => setSlotTime(item.time)} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-cyan-600 text-white' : 'text-gray-400 border border-gray-300 '}`}>{item.time}</p>
          ))}
        </div>
        <button className='bg-cyan-600 text-white mt-4 text-sm font-light px-14 py-3 rounded-full'>Book Appointment </button> */}
      </div>
    </div>
  );
};

export default Appointment;
