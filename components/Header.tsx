import React, { SVGProps, useState } from 'react'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import Hamburger from './Hamburger'

export type Props = {
  initial?: boolean
  clicked: boolean
  Icon: string //SVGProps<SVGSVGElement>
};



const Header = () => {
  //state of menu
  const [state, setState] = useState<Props>({
    initial: false,
    clicked: false,
    Icon: 'Menu'
  });
  //state of the button
  const [disabled, setDisabled] = useState<boolean>(false);
//deterrmine if our menu shoul be disabled
   const disabledMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
       setDisabled(false)
    }, 1200);
   }
  //toogle menu
  const handleMenu = () => {
    disabledMenu()
    if(state.initial === false) {
      setState ({
        initial: false,
        clicked: true,
        Icon: "close"
      });
    }else if (state.initial === true) {
      setState({
        clicked: !state.clicked,
        Icon: "close"
      });
    } else if (state.initial === false) {
      setState({
        clicked: !state.clicked,
        Icon: "close"
      });
    }
  };

  return (
    <header>
        <div className='flex sticky py-2.5 cursor-pointer top-0 items-center w-full px-6 justify-between'>
        <span className="text-3xl font-bold font-Clash leading-[19px] tracking-normal flex flex-col">
            <h3>JOSEPH</h3>
            <h2 className='pl-6'>omotade.</h2>
        </span>
        <button disabled={disabled} onClick={handleMenu} >
        <HiOutlineMenuAlt4 size={29} />
        </button>
        
        </div>
        <Hamburger state={state} />
    </header>
  )
};

export default Header;