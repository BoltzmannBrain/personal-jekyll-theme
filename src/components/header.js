import React from 'react'
import SocialLinks from '../components/social-links'

import '../styles/header.styl'

const Header = () => (
  <div className='header'>
    <div className='logo'></div>
    <h1>Alexander Lavin</h1>
    <SocialLinks />
  </div>
)

export default Header
