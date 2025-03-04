const Copy = require('./Copy');

class Next extends Copy {
    src = './source/next';
    dest = './../frontend/src';

    start() {
        this.processFiles(this.src, this.dest);
        console.log('✅ Next.js part done');
    }
}

module.exports = Next;