import React from 'react'
import{Link} from 'react-router-dom';


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
      path: '/log_in'
    },
    {
      title: 'Log out',
      path: '/log_out'
    },
    {
      title: 'Sign in',
      path: '/sign_in'
    }
  ]

  export default function Navigation() {
  return (
    <nav className="site-navigation">
      <span>BruhBook</span>
      <ul>
        { navLinks.map((link, index) => (
          <li key={index}>
              <Link to={link.path}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </nav>)
}
