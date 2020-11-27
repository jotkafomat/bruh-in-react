import React from 'react'
import{Link} from 'react-router-dom';



  const navLinks = [
    {
      title: 'Home',
      path: '/'
    },
    {
      title: 'Sign in',
      path: '/signin'
    },
    {
      title: 'Sign up',
      path: '/signup'
    },
    {
      title: 'Time line',
      path: '/posts'
    },
    {
      title: 'Bruhs',
      path: '/users'
    },
    {
      title: 'Log out',
      path: '/logout'
    },

  ]

  export default function Navigation() {
  return (
    <nav className="site-navigation">
      <ul>
        { navLinks.map((link, index) => (
          <li className="nav-links" key={index}>
              <Link to={link.path}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </nav>)
}
