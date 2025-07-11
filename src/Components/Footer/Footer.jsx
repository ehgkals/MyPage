import React from 'react'

const Footer = () => {
  return (
    <footer>
        <hr className="divider" style={{ borderTop: '1px solid #e5e7eb' }} />
        <div className="contact-link">
            <a href="https://github.com/ehgkals" target="_blank" rel="noopener noreferrer">
            <img
                src="images/github-icon.webp"
                alt="깃허브 아이콘"
                style={{ width: '30px', height: '30px' }}
            />
            </a>
            <a href="mailto:ehgkals12@gmail.com" target="_blank" rel="noopener noreferrer">
            <img
                src="images/mail-icon.webp"
                alt="메일 아이콘"
                style={{ width: '25px', height: 'auto' }}
            />
            </a>
        </div>
        © 2025 June. All rights reserved.
        <div style={{ height: '30px' }}></div>
    </footer>
  )
}

export default Footer