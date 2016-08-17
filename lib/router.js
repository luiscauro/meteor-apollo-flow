import React, {Component} from 'react';
import {mount} from 'react-mounter';
import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';

import App from '../imports/provider';
import Home from '../imports/ui/home';
import Contact from '../imports/ui/contact';

const routes = FlowRouter.group( { name: 'routes' } );

routes.route('/', {
  name: 'home',
  action() {
    mount( App, { content: <Home /> } );
  }
});

routes.route('/contact', {
  name: 'contact',
  action() {
    mount( App, { content: <Contact /> } );
  }
});

export { routes };
