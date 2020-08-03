import React , {lazy, Suspense} from "react";
import styles from './global.module.css';

const Scaffold = ({children}) => {
    return (
        <div className={styles.container}>{children}</div>
    )
}

export default Scaffold;