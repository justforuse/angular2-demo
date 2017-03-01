import 'core-js/es6';
import 'core-js/es7/reflect';
require('../node_modules/zone.js/dist/zone');

if(process.env.Env === 'production'){

}else{
    Error['stackTraceLimit'] = Infinity;
    require('../node_modules/zone.js/dist/long-stacj-trace-zone');
}