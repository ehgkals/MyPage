import React from 'react'

const Header = () => {
  return (
    <header>
        <nav className="navigation-bar">
            <div className="navigation-bar-logo">
                <a href="index.html"> JUNE. </a>
            </div>

            <ul className="navigation-bar-menu">
                <li>
                    <a href="#about-me" style={{ color: '#333333' }}> 소개 </a>
                </li>
                <li>
                    <a href="#activity" style={{ color: '#666666' }}> 활동 </a>
                </li>
                <li>
                    <a href="#project" style={{ color: '#999999' }}> 프로젝트 </a>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header