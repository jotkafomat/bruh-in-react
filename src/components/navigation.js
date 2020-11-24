import React from 'react'

export default function Navigation() {

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

  return (
    <nav className="site-navigation">
      <span>BruhBook</span>
      <ul>
        { navLinks.map((link, index) => (
          <li key={index}>
              {link.title}
          </li>
        ))}
      </ul>
    </nav>)
}
