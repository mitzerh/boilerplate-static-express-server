/*eslint-env es6, node */
'use strict';


const config = {};
const dir = __dirname;

const base = ((sp) => {
    // one level down
    sp.pop();
    return sp.join('/');
})(dir.split('/'));

config.dir = {
    base: base,
    lib: dir,
    webapp: `${base}/webapp`
};

config.server = {
    port: 9300
};

module.exports = Object.freeze(config);
