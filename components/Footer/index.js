import styles from './Footer.module.css'

export default function Bottom() {

return(
    <>
        <div className={styles.backing}>
            <div className={styles.pagesFooterCenter}>
                <div className={styles.pagesFooter}>Meta</div>
                <div className={styles.pagesFooter}>About</div>
                <div className={styles.pagesFooter}>Blog</div>
                <div className={styles.pagesFooter}>Jobs</div>
                <div className={styles.pagesFooter}>Help</div>
                <div className={styles.pagesFooter}>API</div>
                <div className={styles.pagesFooter}>Privacy</div>
                <div className={styles.pagesFooter}>Terms</div>
                <div className={styles.pagesFooter}>Locations</div>
                <div className={styles.pagesFooter}>Instagram Lite</div>
                <div className={styles.pagesFooter}>Threads</div>
                <div className={styles.pagesFooter}>Contact Uploading & Non-Users</div>
                <div className={styles.pagesFooter}>Meta Verified</div>
            </div>

            <div className={`${styles.pagesFooterCenter} ${styles.pagesFooterBot}`}>
                <div className={styles.pagesFooter}>English v</div>
                <div className={styles.pagesFooter}>&copy; 2024 Instagram from Meta</div>
            </div>
        </div>
    </>

)
}
