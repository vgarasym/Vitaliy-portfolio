import React from 'react'
import Workitem from './Workitem'

const data = [
    {
        year: 2020,
        title: 'Lot Associate',
        duration: 'May 2020 - September 2021',
        details: 'Assisted with keeping the parking lot clean and organized. Helped customers load their purchases into their vehicles. Assisted with carry-outs and online orders.'
    },
    {
        year: 2021,
        title: 'Tech Consultant',
        duration: 'September 2021 - Present',
        details: 'Assisted customers with their tech needs, including phone activations. Helped keep the aisles clean and assisted with other departments. Assisted with carry-outs.'
    },
]
const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
        {data.map((item, idx) => (
            <Workitem key={idx} year={item.year} title={item.title} duration={item.duration} details={item.details} />
        ))}
    </div>
  )
}

export default Work