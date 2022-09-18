import React, { useState } from 'react'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import Hamburger from './Hamburger'

type Props = {
  initial: boolean
  clicked: boolean
  menuName: string
}



const Header = () => {
  //state of menu
  const [state, setState] = useState<Props>({
    initial: false,
    clicked: false,
    menuName: "Menu"
  });
  //state of the button
  const [disabled, setDisabled] = useState<boolean>(false);
  //toogle menu
  const handleMenu = () => {
    if(state.initial === false) {
      setState ({
        initial: false,
        clicked: true,
        menuName: "close"
      });
    }
  }
  return (
    <header >
        <div className='flex sticky py-2.5 cursor-pointer top-0 items-center w-full px-6 justify-between'>
        <span className="text-3xl font-bold font-Clash leading-[19px] tracking-normal flex flex-col">
            <h3>JOSEPH</h3>
            <h2 className='pl-6'>omotade.</h2>
        </span>
        <HiOutlineMenuAlt4 size={29} />
        </div>
        <Hamburger state={state} />
    </header>
  )
}

export default Header