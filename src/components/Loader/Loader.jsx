import { ThreeCircles } from  'react-loader-spinner'
import styles from "./Loader.module.css"


const Loader = () => {
    return (
        <div className={styles.loader}>
            <ThreeCircles />
        </div>
    )
}

export default Loader