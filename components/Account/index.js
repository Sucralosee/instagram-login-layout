import styles from './Account.module.css'

export default function Account() {

    return(
        <>
            <div className={styles.accountMargin}>
                <div className={styles.accountWords}>
                    Don't Have an account? 
                    <span className={styles.accountWordsFancy}> Sign Up</span>
                </div>
            </div>
        </>
    )
}