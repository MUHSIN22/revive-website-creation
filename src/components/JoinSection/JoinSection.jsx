import React from 'react'
import './JoinSection.scss'

export default function JoinSection() {
  return (
    <div className='join-section'>
        <div className="content-section">
            <h1 className="heading">The best book review site for enthusiastic readers</h1>
            <hr className='line-divider'/>
            <p className="description">
                Book lovers, stop up if you've heard this one before: you've just finished a mind-blowing book and you need to hear some discussion about it. What do you do? Dive straight into the limitless realm of the internet and search for book review sites, of course.
            </p>
            <br />
            <p className='description'>
                Or here's another scenario:you've finished reading a novel and now you're searching for something to fill the void.Maybe you want more of the same, or maybe something completely different to switch things up.You'll probably also scour the internet for rating and trustworthy recommendations.
            </p>
        </div>
        <div className="card-section">
            <div className="join-card">
                <h1 className="card-title">Join us as a book reviewer</h1>
                <p className="card-description">
                    Join Ready Discovery and help us find great new books🤓
                </p>
                <br />
                <p className="card-description">
                    The best books can go undiscoverd. Be part of the movement that shines a light on them
                </p>
                <button className="btn-register">Register</button>
            </div>
        </div>
    </div>
  )
}
