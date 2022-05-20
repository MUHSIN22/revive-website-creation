import React from 'react'
import './AboutSection.scss'

export default function AboutSection() {
  return (
    <section className="about-section">
        <div className="about-container">
            <img src="/images/about.jpg" alt="" className="about-image" />
            <h2 className="title">Lorem Ipsum</h2>
            <p className="description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum facere earum dolore. Commodi iste voluptatem, sit quibusdam exercitationem laudantium blanditiis sapiente porro! Nisi iste voluptatibus porro maiores vel libero. Quasi!
            </p>
        </div>
        <strong className="dot-divider">
            ...
        </strong>
    </section>
  )
}
