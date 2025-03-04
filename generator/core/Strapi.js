const Copy = require('./Copy');

class Strapi extends Copy {
    src = './source/cms';
    dest = './../backend';

    start() {
        this.processFiles(this.src, this.dest);
        console.log('✅ Strapi part done');
    }
}

module.exports = Strapi;