import React from 'react'
import ProjectItem from './ProjectItem'
import teslaImg from '../assets/tesla.png'
import atlantisImg from '../assets/atlantis.png'
import discordImg from '../assets/discordbot.jpeg'

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl text-bold text-center text-[#001b5e]'>Projects</h1>
        <p className='text-center py-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nisi quaerat similique? Fuga quos consequuntur natus laborum sapiente quo! Aut deserunt quisquam voluptate earum odio, officiis vel sint ex iste.</p>
        <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectItem img={teslaImg} title='Tesla Website' />
            <ProjectItem img={atlantisImg} title='Atlantis Website' />
            <ProjectItem img={discordImg} title='Discord Bot' />
        </div>
    </div>
  )
}

export default Projects