import React, { Component} from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {  signOut } from '../../actions';

import { ROUTES } from '../../const';
import {Card} from '../Card';
import './style.css';

class NavBarComponent extends Component {

  onClickSignOut = () => {
    this.props.signOut();
    return <Redirect to ={ROUTES.MAIN} />
  }

  render () {

    return (
      <nav className="navbar">
        <Link to={ROUTES.MAIN}>Main</Link>
        <Link to={ROUTES.USERS}>Users</Link>
        { this.props.token ? (
          <>
            <Card
            picture={this.props.avatar}
            name={this.props.name}
            small
          />
          <a type ='button'
          className = "signOutButton"
          onClick={this.onClickSignOut}>Sign Out</a>
          </>
          
        ) : (
          <Link to={ROUTES.SIGNIN}>Sign In</Link>
        )}

      </nav>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    avatar: state.auth.user?.picture,
    name: state.auth.user?.name,
  }
}

const mapDispatchToProps = {
  signOut
}

const NavBar = connect(mapStateToProps, mapDispatchToProps )(NavBarComponent);
export { NavBar };