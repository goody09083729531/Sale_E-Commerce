import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const myElementRef = useRef(null);
  const timesRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      timesRef.current.classList.remove('fa-times');
      myElementRef.current.classList.remove('active');
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    myElementRef.current.classList.toggle('active');
    timesRef.current.classList.toggle('fa-times');
  };

  return (
    <header className="header">
      <Link href="#" className="logo">Ndiana</Link>
      <nav className="navbar" ref={myElementRef}>
        <Link href="/" className="active link">Home</Link>
        <Link href="" className="link">Shop</Link>
        <Link href="" className="link">About</Link>
        <Link href="" className="link">Blog</Link>
        <Link href="" className="link">Contact</Link>
      </nav>
      <div className="icons">
        <i className="fas fa-bars" id="menu-bars" ref={timesRef} onClick={handleClick}></i>
        <i className="fab fa-facebook-f"></i>
        <i className="fab fa-twitter"></i>
        <i className="fa-solid fa-cart-shopping"></i>
        <span className="cart-item-qty"></span>
      </div>
    </header>
  )
}

export default Navbar