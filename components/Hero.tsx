import React from 'react'
import TextAnimation from './TextAnimation'

type Props = {}

const Hero = (props: Props) => {
  return (
    <section>
        <div className='justify-center  font-Clash items-center flex flex-col mt-6'>
            <span className='md:text-8xl text-7xl'>CREATIVE</span>
            <span className='md:text-8xl text-7xl pl-24'>FRONT - END</span>
            <span className='md:text-8xl text-7xl pr-6 md:pr-24'>DEVELOPER</span>
            <button className='border-2 rounded-full text-sm font-bold px-4 py-2 mr-[59%]'>Contact</button>
            <TextAnimation />
        </div>
    </section>
  )
}

export default Hero