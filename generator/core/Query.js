const fs = require('fs');
const path = require('path');
const Component = require('./Component');
const { backSrc }  = require('./variables')

class Query extends Component {
    #componentsFolderName = 'dynamic'
    #componentsPath = path.join(__dirname, backSrc, 'components')
    #path = path.join(this.#componentsPath, this.#componentsFolderName)
    #dest = path.join(__dirname, this.destination, 'graphql/fragments')
    #template = path.join(__dirname, './../source/templates/fragment.graphql')

    #destinationGraphqlFragmentsPath = path.join(__dirname, './../source/next/graphql/fragments')

    startGenerateQuery() {
        const filesNames = this.#readFirstlyFilesName()
        this.#generateQueriesFilesInNextPart(this.#path, filesNames, 'Page')
    }

    #readFirstlyFilesName() {
        return this.#readFilesName(this.#path)
    }

    #readFilesName(pathFrom) {
        try {
            const files = fs.readdirSync(pathFrom);
            return files;
        } catch (err) {
            console.error('Error reading folder:', err);
            return [];
        }
    }

    #generateQueriesFilesInNextPart(pathFrom, filesNames, parentFragmentName) {
        this.#deleteAllFragments(this.#dest)
        this.#addPageFragment()

        const dinamicComponents = []
        
        for(const fileName of filesNames) {
            const fileContent = this.#readFile(pathFrom, fileName)

            const { fileName: name, fields } = this.#generateQuery(fileContent, parentFragmentName)
            dinamicComponents.push({ name, args: fields })
        }
        this.buildUiElements(dinamicComponents)
    }

    #addPageFragment() {
        const content = this.#readPageFragment()
        this.#createFragment('Page', content)
    }

    #readPageFragment() {
        return this.#readFile(this.#destinationGraphqlFragmentsPath, 'Page.graphql')
    }

    #deleteAllFragments(folderPath) {
        if (fs.existsSync(folderPath)) {
            fs.readdirSync(folderPath).forEach(file => {
                const filePath = path.join(folderPath, file);
                if (fs.statSync(filePath).isFile()) {
                    fs.unlinkSync(filePath);
                }
            });
        }
    }

    #generateQuery(fileContent, parentFragmentName) {
        const { fields, attributes, fileName } = this.#shapeFragmentFile(fileContent, parentFragmentName)

        const componentsFields = fields.filter(key => ['component'].includes(attributes[key].type))

        if(Array.isArray(componentsFields)) {
            if(componentsFields?.length) {
                for(const componentsField of componentsFields) {
                    const subComponent = attributes[componentsField]
                    const subComponentPath = subComponent.component.split('.')
    
                    const nextFolder = subComponentPath[0]
                    const folderPath = [this.#componentsPath, nextFolder].join('/')

                    const subFileName = [subComponentPath[1], 'json'].join('.')

                    const subComponentContent = this.#readFile(folderPath, subFileName)
                    this.#shapeFragmentFile(subComponentContent, fileName, componentsField)
                }
            }
        }

        return { fileName, fields }
    }

    #shapeFragmentFile(fileContent, parentFragmentName, selector) {
        const parsedContent = JSON.parse(fileContent)
        const attributes = parsedContent.attributes
        const fields = Object.keys(attributes)

        const filteredField = fields.filter(key => !['component', 'media'].includes(attributes[key].type))

        const template = this.#readTemplate()

        const fragmentName = parsedContent.info.displayName

        const collectionName = parsedContent.collectionName.split('_')
        const collectionNameRoot = collectionName[1].replace(/^./, (c) => c.toUpperCase())
        const collectionTypeName = `Component${collectionNameRoot}${parsedContent.info.displayName}`

        const resultContent = template
            .replace('${name}', fragmentName)
            .replace('${type}', collectionTypeName)
            .replace('${fields}', filteredField.join('\n  '))

        this.#createFragment(fragmentName, resultContent)

        this.#addFragmentToMainPage(fragmentName, parentFragmentName, selector)
        
        return { fields, attributes, fileName: fragmentName }
    }

    #addFragmentToMainPage(fragmentName, parentFragmentName, selector) {
        const parentFragmentFileName = [parentFragmentName, 'graphql'].join('.')
        const separator = '__typename' // its presence in the Page.graphql file is important

        let pageFragmentContent = this.#readFile(this.#dest, parentFragmentFileName)
        const rowWithCaptionOfFragment = ['...', fragmentName].join('')

        const isExistSeparator = pageFragmentContent.includes(separator)

        if(!isExistSeparator) {
            pageFragmentContent = this.#updatedContentWithAddedFocusedSeparator(!selector)
        }

        if(!pageFragmentContent.includes(rowWithCaptionOfFragment)) {
            let childrenRow
            if(selector) {
                childrenRow = `${separator}\n  ${selector} {\n\    ...${fragmentName}\n  }`
            } else {
                childrenRow = [separator, fragmentName].join('\n\    ...')
            }
            pageFragmentContent = pageFragmentContent.replace(separator, childrenRow)
        }

        this.#saveNewContentToMainFragment([this.#dest, parentFragmentFileName].join('/'), pageFragmentContent)
    }

    #updatedContentWithAddedFocusedSeparator(isMainFragment) {
        if(isMainFragment) {
            const startedContent = this.#readPageFragment()
            pageFragmentContent = startedContent
        } else {
            pageFragmentContent = pageFragmentContent.replace(/}(?!.*})/, `  ${separator}\n\}`);
        }
    }

    #saveNewContentToMainFragment(pathTo, content) {
        fs.writeFileSync(pathTo, content, 'utf8')
    }

    #createFragment(fileName, content) {
        const endPath = path.join(this.#dest, `${fileName}.graphql`)
        fs.writeFileSync(endPath, content)
        console.log(`➡️  ${fileName}.graphql`)
    }

    #readTemplate() {
        return fs.readFileSync(this.#template, 'utf8')
    }

    #readFile(pathFrom, fileName) {
        const filePath = path.join(pathFrom, fileName)
        return fs.readFileSync(filePath,'utf8')
    }
}

module.exports = Query;