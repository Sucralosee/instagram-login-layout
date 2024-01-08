import styles from './GetApp.module.css'

export default function GetApp() {

    return(
        <>
            <div className={styles.App}>
                <div className={styles.AppWords}>
                    Get the app.
                    <div className={styles.AppPics}>
                        <div className={styles.AppPicsOne}>
                            <img src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png' className={styles.AppPicsOne}></img>
                        </div>
                        <div className={styles.AppPicsTwo}>
                            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Get_it_from_Microsoft_Badge.svg/2560px-Get_it_from_Microsoft_Badge.svg.png' className={styles.AppPicsTwo}></img>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}