import React from 'react'
import './LoginSection.scss'

export default function LoginSection() {
  return (
    <section className="login-section">
        <div className="login-card">
          <input type="text" placeholder='Name' className="login-input" />
          <input type="text" placeholder='Email' className="login-input" />
          <div className="upload-wrapper">
            <h3 className="upload-text">Upload user profile</h3>
            <button className="btn-upload">Upload</button>
          </div>
          <div className="btn-login-wrapper">
            <p className="already-text">Already have an account?</p>
            <button className="btn-login">Login</button>
          </div>
        </div>
    </section>
  )
}
