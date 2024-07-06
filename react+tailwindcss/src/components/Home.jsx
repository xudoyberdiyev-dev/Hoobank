import React from 'react'
import {styles} from "../utils/style.js";
import {discount, robot} from "../assets/index.js";
import {Button} from "./index.js";

const Home = () => {
    return (
        <section id={'home'} className={`flex md:flex-row flex-col ${styles.paddingY}`}>
            {/*  */}
            <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
                {/*  */}
                <div
                    className={'flex flex-row items-center  py-[6px] px-4 rounded-[10px] mb-2 bg-slate-500 bg-discount-gradient'}>
                    <img src={discount} alt="rasm topilmadi" className={'w-[32px] h-[32px]'}/>
                    <p className={`${styles.paragraph} ml-2`}>
                        <span className={'text-white'}>20%</span> Discount For <span
                        className={'text-white'}>1 Month</span> Account
                    </p>
                </div>
                {/*  */}
                <div className={'w-full'}>
                    <h1 className={`${styles.heading1}`}>The Next <br/>
                        <span className={'text-gradient'}>Generation</span>
                        <br/>
                        <span>Payment Method.</span>
                    </h1>

                    {/*  */}

                    <p className={`${styles.paragraph} mt-5 max-w-[550px]`}>
                        Our team of experts use a methodology to identify the credit cards most likely to fit your
                        needs. We examine annual percentage rates, annual fees.
                    </p>
                    <Button styles={'mt-2'}/>

                </div>
                <div className={'absolute z-[0] w-[40%] h-[35%] top-0 pink-gradient'}/>
                <div className={'absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient'}/>
                <div className={'absolute z-[0] w-[50%] h-[55%] right-20 bottom-20 blue__gradient'}/>
            </div>
            {/*  */}
            <div className={`flex-1 ${styles.flexStart} md:my-0 my-10 relative`}>
                <img src={robot} alt="robot" className={'w-[100%] h-[100%] relative z-10 rounded-sm'}/>
            </div>
        </section>
    )
}

export default Home