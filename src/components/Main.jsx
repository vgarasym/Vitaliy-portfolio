import React from 'react'
import background from '../assets/yellow-blue.png'
import {TypeAnimation} from 'react-type-animation'
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

const Main = () => {
  return (
    <div id='main'>
        <img src={background} className='w-full h-screen object-cover'/>
        <div className='w-full h-screen absolute top-0 left-0'>
          <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
              <h1 className='sm:text-5xl text-4xl font-bold text-center text-gray-800'>I'm Vitaliy Garasymovych</h1>
              <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>
                I'm a
              <TypeAnimation
                  sequence={[
                      'Developer',
                      2000,
                      'Coder',
                      2000,
                      'Tech Enthusiast',
                      2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: '1em', paddingLeft: '5px' }}
                    repeat={Infinity}
                  />
              </h2>
              <div className='flex justify-start space-x-8 pt-6 max-w-[200px] w-full'>
                <a href="https://github.com/vgarasym" target='_blank'><FaGithub className='cursor-pointer' size={20}/></a>
                <a href="https://www.linkedin.com/in/vitaliygara/" target='_blank'><FaLinkedinIn className='cursor-pointer' size={20}/></a>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Main