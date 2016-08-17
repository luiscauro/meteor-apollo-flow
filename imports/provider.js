import { Meteor } from 'meteor/meteor';
import React from 'react';

import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient();

const App = ({content}) =>
(
  <ApolloProvider client={client}>
    {content}
  </ApolloProvider>
);

export default App;
