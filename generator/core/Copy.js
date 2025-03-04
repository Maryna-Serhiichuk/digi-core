const fs = require('fs');
const path = require('path');

class Copy {
    processFiles(src, dest) {
        if (!fs.existsSync(dest)) {
            fs.mkdirSync(dest, { recursive: true });
        }

        const items = fs.readdirSync(src);

        items.forEach(item => {
            const srcPath = path.join(src, item);
            const destPath = path.join(dest, item);

            if (fs.lstatSync(srcPath).isDirectory()) {
                this.processFiles(srcPath, destPath); 
            } else {
                fs.copyFileSync(srcPath, destPath);
            }
        });
    }
}

module.exports = Copy;