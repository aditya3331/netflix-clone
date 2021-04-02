import React from 'react'

function signupScreen() {
    return (
        <div className = 'signupScreen'>
            <form>
                <h1>Sign In</h1>
                <input placeholder = 'Email' type = 'email'/>
                <input placeholder = 'password' type = 'password'/>
                <button type = 'submit'>Sign In</button>
            </form>
            
        </div>
    )
}

export default signupScreen
