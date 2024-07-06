import React from 'react'
import {styles} from "../utils/style.js";
import {Button} from "./index.js";

const CTA = () => {
    return (
        <div
            className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col rounded-[20px] bg-slate-600 box-shadow bg-dark-gradient`}>
            <div className={'flex-1 flex flex-col'}>
                <h2 className={`${styles.heading2}`}>Come try our service now!</h2>
                <p className={`${styles.paragraph} max-w-[550px]`}>
                    Everything you need to accept card payments and grow your business anywhere on the planet.
                </p>
            </div>

            <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
                <Button/>
            </div>

        </div>
    )
}

export default CTA