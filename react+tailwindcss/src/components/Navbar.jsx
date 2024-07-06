import React, {useState} from 'react'
import {styles} from "../utils/style.js";
import {navigationLinks} from "../utils/constants.js";
import {close, logo, menu} from "../assets/index.js";

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    const [active, setActive] = useState('home')

    const activeHandler = id => setActive(id)
    const toggleHandler = () => setToggle(prev => !prev)

    return (
        <div className={`w-full py-6 ${styles.flexBetween}`}>
            <img src={logo} alt="logo" className={'w-[130px] h-[35px] cursor-pointer'}/>

            {/*   */}

            <ul className={'list-none sm:flex hidden justify-end  items-center flex-1'}>
                {navigationLinks.map((item, i) => (
                    <li key={item.id}
                        className={`font-montserrat font-normal cursor-pointer text-[16px] text-white
                        ${i === navigationLinks.length - 1 ? 'mr-0' : 'mr-10'} 
                        ${active === item.id ? 'text-white' : 'text-lightWhite'} 
                        hover:text-white transition-all duration-500`}
                        onClick={() => activeHandler(item.id)}>
                        {item.title}
                    </li>
                ))}
            </ul>

            {/*    */}

            <div className={"sm:hidden flex flex-1 justify-end items-center"}>
                <img src={toggle ? close : menu} alt="nav" className={'w-[30px] h-[30px] object-contain cursor-pointer'}
                     onClick={toggleHandler}/>

                <div
                    className={`${!toggle ? 'hidden' : 'flex'} p-6  absolute top-20 right-0 left-0 w-full sidebar bg-black-gradient`}>
                    <ul className={'list-none flex  justify-center  items-center flex-1'}>
                        {navigationLinks.map((item, i) => (
                            <li key={item.id}
                                className={`font-montserrat font-normal cursor-pointer text-[16px] text-white
                                ${i === navigationLinks.length - 1 ? 'mr-0' : 'mr-10'} 
                                ${active === item.id ? 'text-white' : 'text-lightWhite'} 
                                hover:text-white transition-all duration-500`}
                                onClick={() => activeHandler(item.id)}>
                                {item.title}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar