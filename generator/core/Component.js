const fs = require('fs');
const path = require('path');
const { frontSrc }  = require('./variables')

class Component {
    destination = frontSrc

    #destinationParentPath = path.join(__dirname, this.destination, 'sections/index.tsx')
    #parentComponent = {
        import: path.join(__dirname, './../source/templates/parent-component/import.txt'),
        export: path.join(__dirname, './../source/templates/parent-component/export.txt'),
        component: path.join(__dirname, './../source/templates/parent-component/component.txt')
    }

    #destinationSectionPath = path.join(__dirname, this.destination, 'sections')
    #componentTemplate = path.join(__dirname, './../source/templates/section/component.tsx')
    
    #destinationSourceForBuild = path.join(__dirname, this.destination, 'components/BuildPage/source.tsx')
    #sourceForBuild = {
        array: path.join(__dirname, './../source/templates/source-for-build/array.txt'),
        import: path.join(__dirname, './../source/templates/source-for-build/import.txt'),
        type: path.join(__dirname, './../source/templates/source-for-build/type.txt'),
    }

    buildUiElements(components) {
        const names = components.map(component => component.name)
        this.#updateBuildPageSource(names)
        console.log(`⚛️  Build source file is Updated`)
        this.#shapeParentComponent(names)
        console.log(`⚛️  Parent Section component file is Updated`)
        for(const component of components) {
            this.#creareSectionComponent(component)
            console.log(`⚛️  ${component.name}.tsx`)
        }
    }

    #updateBuildPageSource(names) {
        let imports = fs.readFileSync(this.#sourceForBuild.import, 'utf8')
        let type = fs.readFileSync(this.#sourceForBuild.type, 'utf8')
        let array = fs.readFileSync(this.#sourceForBuild.array, 'utf8')

        type = type.replace('${types}', names.map(name => `"${name}"`).join(' | '))
        array = array.replace('${array}', names.map(name => `${name}: Section.${name},`).join('\n  '))

        const content = [imports, type, array].join('\n\n')
        fs.writeFileSync(this.#destinationSourceForBuild, content)
    }

    #creareSectionComponent(component) {
        let content = fs.readFileSync(this.#componentTemplate, 'utf8')
        content = content
            .replaceAll('${name}', component.name)
            .replace('${type}', ['ComponentDynamic', component.name].join(''))
            .replace('${args}', component.args.join(', '))

        const sectionComponentPath = path.join(this.#destinationSectionPath, [component.name, 'tsx'].join('.'))
        fs.writeFileSync(sectionComponentPath, content)
    }

    #shapeParentComponent(names) {
        const imports = fs.readFileSync(this.#parentComponent.import,'utf8')
        const exports = fs.readFileSync(this.#parentComponent.export,'utf8')
        const component = fs.readFileSync(this.#parentComponent.component,'utf8')

        let shapedImports = []
        let shapedExports = []

        for(const name of names) {
            shapedImports.push(imports.replaceAll('${name}', name))
            shapedExports.push(exports.replaceAll('${name}', name))
        }

        shapedImports = shapedImports.join('\n')
        shapedExports = shapedExports.join('\n')

        const sectionContent = [shapedImports, component, shapedExports].join('\n\n')

        fs.writeFileSync(this.#destinationParentPath, sectionContent)
    }
}

module.exports = Component;