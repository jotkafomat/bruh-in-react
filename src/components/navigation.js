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
      title: 'Post',
      path: '/createpost'
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
    <div className="site-navigation">
      <ul className="nav-links">
        { navLinks.map((link, index) => (
          <button  key={index}>
              <Link to={link.path}>{link.title}</Link>
          </button>
        ))}
      </ul>
    </div>)
}
