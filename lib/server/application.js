var WebServer = require('koa');
import {Provide} from 'di';

@Provide(WebServer)
export  {WebServer}