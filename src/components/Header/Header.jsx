import React, { useEffect, useRef, useState } from 'react'
import "./Header.scss"

export default function Header() {
    const staticRef = useRef();
    const searchWrapperRef = useRef();
    const headerRef = useRef();
    const searchCloseIconRef = useRef()
    const [searchWidth,setSearchWidth] = useState(0)

    useEffect(() => {
        let searchWidth = searchWrapperRef.current.offsetWidth
        staticRef.current.style.width = `${(searchWidth * 15)/100}px`
        setSearchWidth(searchWidth);
        window.addEventListener("resize",()=>{
            searchWidth = searchWrapperRef.current.offsetWidth
            setSearchWidth(searchWidth);
        })
    },[])

    const handleSearchBar = (event) => {
        if(event.target.className !== "search-close-icon"){
            staticRef.current.style.width = `${searchWidth}px`
            headerRef.current.style.backgroundColor = '#03333d'
            searchCloseIconRef.current.style.display = "block";
        }
    }

    const closeSearch = () => {
        searchCloseIconRef.current.style.display = "none";
        staticRef.current.style.width = `${(searchWidth*15)/100}px`
        headerRef.current.style.backgroundColor = 'transparent'
    }

    return (
        <header className="main-header" ref={headerRef}>
            <div className="header-wrapper">
                <h1 className="logo">
                    Discovery
                    <img src="/icons/arrow-down-icon.png" alt="" />
                </h1>
                <p className="btn-login">Login</p>
            </div>
            <div className="search-wrapper" ref={searchWrapperRef}>
                <div className="search-input-wrapper search-input-static" onClick={handleSearchBar} ref={staticRef}>
                    <img src="/icons/close-icon.png" className='search-close-icon' alt="" ref={searchCloseIconRef} onClick={closeSearch}/>
                    <input type="text" className='search-input' placeholder='Search' />
                    <img src="/icons/search-icon.png" alt="" />
                </div>
            </div>
        </header>
    )
}
