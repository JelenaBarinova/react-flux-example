
"use strict";

let React   = require('react');
let ReactDOM = require('react-dom');

let actions = require('../actions');

let Menu = React.createClass ({

  switchLanguage(key, event) {
    actions.switchLanguage(key);
  },

  render() {
    return (
    <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"
            aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">React Flux</a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li className="active"><a href="#home">{this.props.data.home} <span className="sr-only">(current)</span></a></li>
              <li><a href="#about">{this.props.data.about}</a></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#" data-target="#" onClick={this.switchLanguage.bind(this,'en')}>EN</a></li>
              <li><a href="#" data-target="#" onClick={this.switchLanguage.bind(this,'lt')}>LT</a></li>
              <li><a href="#" data-target="#" onClick={this.switchLanguage.bind(this,'ru')}>RU</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
});

module.exports = Menu;