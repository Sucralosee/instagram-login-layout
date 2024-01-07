import styles from './Form.module.css'

export default function Form() {
        return(
            <>
                <div className={styles.formOuterContainer}>
                    <div className={styles.formContainer}>
                        <div className={styles.instaLogo}>
                            <img src='https://www.vectorlogo.zone/logos/instagram/instagram-wordmark.svg' className={styles.logo}></img>
                        </div>

                        <form className={styles.form}>
                            <div className={styles.formFive}>
                                <div className={styles.inputMargin}>
                                    <label className={styles.username}>
                                        <input
                                            placeholder='Phone Number, username, or email'
                                            id="username"
                                            className={styles.usernameInput}
                                            type="next"
                                        />
                                    </label>
                                </div>
                                
                                <div className={styles.inputMargin}>
                                    <label className={styles.password}>
                                        <input 
                                            placeholder='Password'
                                            id="email"
                                            className={styles.passwordInput}
                                            type="email"
                                        />
                                    </label>
                                </div>

                                <div className={styles.logInButton}>
                                    <button href="https://instagram-login-layout-three.vercel.app/" target="_blank">Log in</button>
                                </div>

                                <div className={styles.or}>
                                    <div className={styles.orLineOne}></div>
                                    <div className={styles.orWord}>OR</div>
                                    <div className={styles.orLineTwo}></div>
                                </div>

                                <div className={styles.facebookMargin}> 
                                    <button className={styles.facebook}>
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Facebook_icon_2013.svg/800px-Facebook_icon_2013.svg.png" className={styles.fbimg}></img>
                                        <p className={styles.fbWord}>Log in with Facebook</p>
                                    </button>
                                </div>
                            </div>

                            <div className={styles.forgor}>
                                    <p className={styles.forgorPass}>Forgot password?</p>
                                </div>
                        </form>

                    </div>
                </div>
            </>
        )
}