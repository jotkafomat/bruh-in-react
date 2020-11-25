import React from 'react'
import{Link} from 'react-router-dom';
import logo from '../pics/bruh.png';


  const navLinks = [
    {
      title: 'Home',
      path: '/'
    },
    {
      title: 'Post',
      path: '/post'
    },
    {
      title: 'Log in',
      path: '/login'
    },
    {
      title: 'Log out',
      path: '/logout'
    },
    {
      title: 'Sign in',
      path: '/signin'
    }
  ]

  export default function Navigation() {
  return (
    <nav className="site-navigation">
      <span>BruhBook<img className="bruh-logo" src={logo} alt="Logo" /></span>
      <ul>
        { navLinks.map((link, index) => (
          <li key={index}>
              <Link to={link.path}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </nav>)
}
