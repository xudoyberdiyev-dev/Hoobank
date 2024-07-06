import {styles} from "../utils/style.js";
import {Billing, Contract, Home, Navbar, Statistic,CTA} from "../components/index.js";
import Business from "../components/Business.jsx";

const App = () => {
return (
    <div className={"bg-primary w-full overflow-hidden"}>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.container}`}>
                <Navbar/>
            </div>
        </div>

        <div className={`bg-primary ${styles.flexStart}`}>
            <div className={`${styles.container}`}>
                <Home/>
            </div>
        </div>

        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter} `}>
            <div className={`${styles.container}`}>
                <Statistic/>
                <Business/>
                <Billing/>
                <Contract/>
                <CTA/>
            </div>
        </div>
    </div>
);
}


export default App
