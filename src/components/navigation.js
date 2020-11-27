import React from 'react'
import{Link} from 'react-router-dom';



  const navLinks = [
    {
      title: 'Home',
      path: '/'
    },
    {
      title: 'Sign in',
      path: '/Signin'
    },
    {
      title: 'Sign up',
      path: '/Signup'
    },
    {
      title: 'Time line',
      path: '/Posts'
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
