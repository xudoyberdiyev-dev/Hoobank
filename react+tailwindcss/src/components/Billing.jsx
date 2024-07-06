import React from 'react'
import {layout, styles} from "../utils/style.js";
import {appStory, billing, googlePlay} from "../assets/index.js";

const Billing = () => {
    return (
        <section id={'product'} className={layout.sectionRevers}>
            <div className={layout.sectionImageReverse}>
                <img src={billing} alt="bil" className={'w-[100%] h-[100%] relative z-[5]'}/>

                <div className={'absolute z-[1] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink-gradient'}/>
            </div>

            <div className={layout.sectionInfo}>
                <h2 className={styles.heading2}>Easily control your <br className={'sm:block hidden'}/>
                    billing & invoicing.
                </h2>
                <p className={`max-w-[550px] mt-5 ${styles.paragraph}`}>We consider the payment methods you'll offer your customers when you start your business. This is an
                    important part of managing your business cash flow and meeting your customer's needs.
                </p>

                <div className={'flex flex-row flex-wrap sm:mt-10 mt-6'}>
                    <img src={googlePlay} alt="salom" className={'w-[129px] h-[42px] object-contain mr-5 cursor-pointer'}/>
                    <img src={appStory} alt="salom" className={'w-[129px] h-[42px] object-contain mr-5 cursor-pointer'}/>
                </div>
            </div>
        </section>
    )
}

export default Billing