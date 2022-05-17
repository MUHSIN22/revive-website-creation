import React from 'react'
import './Banner.scss'

export default function Banner() {
  return (
    <section className='banner-container'>
        <div className="content-section">
            <h1 className="banner-title">
                Join Discovery, <br />
                <span>
                    the new community <br />
                    for book lovers.
                </span>
            </h1>
            <button className="btn btn-discovery">
                Go to Discovery
                <img src="/icons/share-icon.png" alt="" />
            </button>
            <p className="banner-descritpion">
                Trust book recommendation from real people, not robots🤖
            </p>
        </div>
        <div className="image-section" style={{backgroundImage: `url('/images/banner.png')`}}></div>
        <span className="banner-strip"></span>
    </section>
  )
}
