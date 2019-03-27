import 'babel-polyfill';

import api from './api';

import serverless from 'serverless-http';

module.exports.api = serverless(api);
