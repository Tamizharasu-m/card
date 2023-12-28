import React from 'react';
import './Login.css';

export default function Login() {
    return (
        <div>
            <div class="login-box">
                <h2>Login</h2>
                <form>
                    <div class="user-box">
                        <input type="text" name="" required="" />
                        <label>Username</label>
                    </div>
                    <div class="user-box">
                        <input type="password" name="" required="" />
                        <label>password</label>
                    </div>

                    <div class="button-form">

                        <a id="sumbit" href="#">Sumbit</a>

                        <div id="register">
                            Don't have an account ?
                            <a href="#">Register</a>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    )
}
