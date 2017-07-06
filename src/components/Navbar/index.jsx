import React, { Component } from 'react';
import { Link } from 'react-scroll';
import Logo from '../Logo';
import links from './links';

// eslint-disable-next-line
import styles from './styles.css';


class Navbar extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      hidden: true,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    let hidden = null;
    if (document.body.scrollTop < 200) {
      hidden = true;
    } else {
      hidden = false;
    }

    this.setState({
      hidden,
    });
  }

  render() {
    return (
      <div className="navbar">
        <Logo hidden={this.state.hidden} />
        {links.map(link => (
      link.scroll ?
        <Link className="navbar-link" activeClass="navbar-link-active" to={link.url} spy smooth key={link.url}>
          {link.title}
        </Link>
        :
        <a tabIndex={0} rel="noopener noreferrer" target="_blank" className="navbar-link" href={link.url} key={link.url}>{link.title}</a>
   ))}
      </div>
    );
  }
}

export default Navbar;
