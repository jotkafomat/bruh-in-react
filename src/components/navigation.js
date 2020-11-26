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
      path: '/login'
    },
    {
      title: 'Log out',
      path: '/logout'
    },
    {
      title: 'Sign up',
      path: '/signup'
    },
    {
      title: 'Time line',
      path: '/timeline'
    }
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
