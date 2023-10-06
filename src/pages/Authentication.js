import React, { useRef } from 'react'
import '../styles/authentication.css'

const Authentication = () => {

    let containerRef = useRef(null);

    const handleClick = () => {

    }

    return (
        <div id='authentication'>
            <div ref={containerRef} className="container" id="container">
                <div className="form-container sign-up-container">
                    <form action="#">
                        <h1>Create Account</h1>
                        <div className="social-container">
                            <a href="#" className="social">
                                <i className="fab fa-google-plus-g" />
                            </a>
                        </div>
                        <span>or use your email for registration</span>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button>Sign Up</button>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form action="#">
                        <h1>Sign in</h1>
                        <div className="social-container">
                            <a href="#" className="social">
                                <i className="fab fa-google-plus-g" />
                            </a>
                        </div>
                        <span>or use your account</span>
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <a href="#">Forgot your password?</a>
                        <button>Sign In</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button className="ghost" id="signIn">
                                Sign In
                            </button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start journey with us</p>
                            <button onClick={() => {
                                containerRef.classList.add("right-panel-active");
                            }} className="ghost" id="signUp">
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="backwrap gradient">
                <div className="back-shapes">
                    {/* All this img tags was autogenerated by custom written js tool */}
                    <span
                        className="floating circle"
                        style={{
                            top: "66.59856996935649%",
                            left: "13.020833333333334%",
                            animationDelay: "-0.9s"
                        }}
                    />
                    <span
                        className="floating triangle"
                        style={{
                            top: "31.46067415730337%",
                            left: "33.59375%",
                            animationDelay: "-4.8s"
                        }}
                    />
                    <span
                        className="floating cross"
                        style={{
                            top: "76.50663942798774%",
                            left: "38.020833333333336%",
                            animationDelay: "-4s"
                        }}
                    />
                    <span
                        className="floating square"
                        style={{
                            top: "21.450459652706844%",
                            left: "14.0625%",
                            animationDelay: "-2.8s"
                        }}
                    />
                    <span
                        className="floating square"
                        style={{
                            top: "58.12053115423902%",
                            left: "56.770833333333336%",
                            animationDelay: "-2.15s"
                        }}
                    />
                    <span
                        className="floating square"
                        style={{
                            top: "8.682328907048008%",
                            left: "72.70833333333333%",
                            animationDelay: "-1.9s"
                        }}
                    />
                    <span
                        className="floating cross"
                        style={{
                            top: "31.3585291113381%",
                            left: "58.541666666666664%",
                            animationDelay: "-0.65s"
                        }}
                    />
                    <span
                        className="floating cross"
                        style={{
                            top: "69.96935648621042%",
                            left: "81.45833333333333%",
                            animationDelay: "-0.4s"
                        }}
                    />
                    <span
                        className="floating circle"
                        style={{
                            top: "15.117466802860061%",
                            left: "32.34375%",
                            animationDelay: "-4.1s"
                        }}
                    />
                    <span
                        className="floating circle"
                        style={{
                            top: "13.074565883554648%",
                            left: "45.989583333333336%",
                            animationDelay: "-3.65s"
                        }}
                    />
                    <span
                        className="floating cross"
                        style={{
                            top: "55.87334014300306%",
                            left: "27.135416666666668%",
                            animationDelay: "-2.25s"
                        }}
                    />
                    <span
                        className="floating cross"
                        style={{
                            top: "49.54034729315628%",
                            left: "53.75%",
                            animationDelay: "-2s"
                        }}
                    />
                    <span
                        className="floating cross"
                        style={{
                            top: "34.62717058222676%",
                            left: "49.635416666666664%",
                            animationDelay: "-1.55s"
                        }}
                    />
                    <span
                        className="floating cross"
                        style={{
                            top: "33.19713993871297%",
                            left: "86.14583333333333%",
                            animationDelay: "-0.95s"
                        }}
                    />
                    <span
                        className="floating square"
                        style={{
                            top: "28.19203268641471%",
                            left: "25.208333333333332%",
                            animationDelay: "-4.45s"
                        }}
                    />
                    <span
                        className="floating circle"
                        style={{
                            top: "39.7344228804903%",
                            left: "10.833333333333334%",
                            animationDelay: "-3.35s"
                        }}
                    />
                    <span
                        className="floating triangle"
                        style={{
                            top: "77.83452502553627%",
                            left: "24.427083333333332%",
                            animationDelay: "-2.3s"
                        }}
                    />
                    <span
                        className="floating triangle"
                        style={{
                            top: "2.860061287027579%",
                            left: "47.864583333333336%",
                            animationDelay: "-1.75s"
                        }}
                    />
                    <span
                        className="floating triangle"
                        style={{
                            top: "71.3993871297242%",
                            left: "66.45833333333333%",
                            animationDelay: "-1.25s"
                        }}
                    />
                    <span
                        className="floating triangle"
                        style={{
                            top: "31.256384065372828%",
                            left: "76.92708333333333%",
                            animationDelay: "-0.65s"
                        }}
                    />
                    <span
                        className="floating triangle"
                        style={{
                            top: "46.47599591419816%",
                            left: "38.90625%",
                            animationDelay: "-0.35s"
                        }}
                    />
                    <span
                        className="floating cross"
                        style={{
                            top: "3.4729315628192032%",
                            left: "19.635416666666668%",
                            animationDelay: "-4.3s"
                        }}
                    />
                    <span
                        className="floating cross"
                        style={{
                            top: "3.575076608784474%",
                            left: "6.25%",
                            animationDelay: "-4.05s"
                        }}
                    />
                    <span
                        className="floating cross"
                        style={{
                            top: "77.3237997957099%",
                            left: "4.583333333333333%",
                            animationDelay: "-3.75s"
                        }}
                    />
                    <span
                        className="floating cross"
                        style={{
                            top: "0.9193054136874361%",
                            left: "71.14583333333333%",
                            animationDelay: "-3.3s"
                        }}
                    />
                    <span
                        className="floating square"
                        style={{
                            top: "23.6976506639428%",
                            left: "63.28125%",
                            animationDelay: "-2.1s"
                        }}
                    />
                    <span
                        className="floating square"
                        style={{
                            top: "81.30745658835546%",
                            left: "45.15625%",
                            animationDelay: "-1.75s"
                        }}
                    />
                    <span
                        className="floating square"
                        style={{
                            top: "60.9805924412666%",
                            left: "42.239583333333336%",
                            animationDelay: "-1.45s"
                        }}
                    />
                    <span
                        className="floating square"
                        style={{
                            top: "29.009193054136876%",
                            left: "93.90625%",
                            animationDelay: "-1.05s"
                        }}
                    />
                    <span
                        className="floating square"
                        style={{
                            top: "52.093973442288046%",
                            left: "68.90625%",
                            animationDelay: "-0.7s"
                        }}
                    />
                    <span
                        className="floating square"
                        style={{
                            top: "81.51174668028601%",
                            left: "83.59375%",
                            animationDelay: "-0.35s"
                        }}
                    />
                    <span
                        className="floating square"
                        style={{
                            top: "11.542390194075587%",
                            left: "91.51041666666667%",
                            animationDelay: "-0.1s"
                        }}
                    />
                </div>
            </div>
        </div>

    )
}

export default Authentication
