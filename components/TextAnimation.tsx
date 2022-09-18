import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

type Props = {}

const TextAnimation = (props: Props) => {
  return (
    <div className='justify-end mt-6 flex items-end pl-[40%]'>
        <Typewriter words={[
            'I am joseph Omotade',
            'From Nigeria',
            'love to code, nextflix and basketball',
            'code.tsx'
        ]} 
        loop 
        cursorStyle='|'/>
    </div>
  )
}

export default TextAnimation