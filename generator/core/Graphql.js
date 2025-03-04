const { spawn } = require('child_process');
const Query = require('./Query');

class Graphql extends Query {
    #command = process.platform === 'win32' ? 'npx.cmd' : 'npx';
    #args = ['graphql-codegen', '--config', 'codegen.yaml'];

    #dots = 0;

    #loadingInterval = setInterval(() => {
        this.#dots = (this.#dots + 1) % 6;
        process.stdout.write(`\rLoading${'.'.repeat(this.#dots)}   `);
    }, 1000);

    startGenerate() {
        const child = spawn(this.#command, this.#args, { stdio: 'inherit', cwd: './../frontend' });

        child.on('close', (code) => {
            this.#getResult(code)
            this.startGenerateQuery()

            this.generate()
        });
    }
    
    generate() {
        const next = spawn(this.#command, this.#args, { stdio: 'inherit', cwd: './../frontend' });

        next.on('close', (code) => {
            this.#outputControl()
            this.#getResult(code)
            this.startGenerateQuery()
        });
    }

    #outputControl() {
        clearInterval(this.#loadingInterval);
        process.stdout.write('\r');
    }

    #getResult(code) {
        if (code === 0) {
            console.log('\n✅ GraphQL generated');
          } else {
            console.error(`Process exited with code ${code}`);
            console.error(`❌  Check your Strapi performance`);
          }
    }
}

module.exports = Graphql;