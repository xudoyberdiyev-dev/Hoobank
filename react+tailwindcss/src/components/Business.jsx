import React from 'react'
import {layout, styles} from "../utils/style.js";
import {Button} from "./index.js";
import {features} from "../utils/constants.js";
import FeatureCard from "./FeatureCard.jsx";

const Business = () => {
    return (
        <section id={'features'} className={layout.section}>
            <div className={layout.sectionInfo}>
                <h2 className={`${styles.heading2}`}>
                    You do the business, <br className={'sm:block hidden'}/>
                    we'll handle the money.
                </h2>
                <p className={`${styles.paragraph} max-w-[550px] mt-5`}>
                    With the right credit card, you can improve your financial life by building credit, earning rewards
                    and saving money. But with hundreds of credit cards on the market.
                </p>
                <Button styles={'mt-10'}/>
            </div>
            <div className={`${layout.sectionImage} flex-col`}>
                {features.map((item,i)=>(
                    <FeatureCard key={item.id} {...item} i={i}/>
                ))}
            </div>
        </section>
    )
}

export default Business