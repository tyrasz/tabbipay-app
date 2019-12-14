import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import logo from '../src/images/Logo.png'

class Nav extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      hasScrolled: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  render() {
    return (
      <nav className={this.state.hassScrolled ? 'Nav NavScrolled' : 'Nav'}>
        <div className="NavGroup">
          <img src={logo} alt="logo" />
          <ul className="nav-links">
            <Link to='/about'><li>About</li></Link>
            <Link to='/terms'><li>Terms</li></Link>
            <Link to='/media'><li>Media</li></Link>
            <button>Register</button>
            <Link to='/account'><button>Login</button></Link>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Nav;
