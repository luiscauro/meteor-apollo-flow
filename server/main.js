import express from 'express';
import bodyParser from 'body-parser';
import { Meteor } from 'meteor/meteor';
import { apolloExpress } from 'apollo-server';
import proxyMiddleware from 'http-proxy-middleware';

const GRAPHQL_PORT = 4000;

var graphQLServer = express();

graphQLServer.use('/graphql', bodyParser.json(), apolloExpress({}));

graphQLServer.listen(GRAPHQL_PORT);

WebApp.rawConnectHandlers.use(proxyMiddleware(`http://localhost:${GRAPHQL_PORT}/graphql`));
