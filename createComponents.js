const fs = require('fs');//file stream

const componentName = process.argv[2];
const componentPath = process.argv[3];
const componentTemplate = `import st from './${componentName}.module.scss'

const ${componentName} = () => {
    return (
        <div className={st.root}>
       
        </div>
    );
};

export default ${componentName};`;

const indexTemplate = `import ${componentName} from './${componentName}';

export default ${componentName};`;

const createComponents = new Promise((resolve, reject) => {
    const path = `./src/${componentPath}/${componentName}`;

    if (fs.existsSync(path)) {
        reject('Component exists');
    }
    // create folder
    fs.mkdir(path, { recursive: true }, (err) => {
        if (err !== null) {
            reject(err);
        } else {
            resolve(path);
        }
    })
})

createComponents.then(async (dirPath) => {
    //writeFile('path', "content")
    await fs.writeFile(`${dirPath}/${componentName}.js`, componentTemplate, (err) => {
        if (err !== null) {
            Promise.reject(err)
        }
    });
    return dirPath;

}).then(async (dirPath) => {
    // \n\n переносы
    await fs.writeFile(`${dirPath}/${componentName}.module.scss`, ".root {\n\n}", (err) => {
        if (err !== null) {
            Promise.reject(err)
        }
    });
    return dirPath;

}).then(async (dirPath) => {
    await fs.writeFile(`${dirPath}/index.js`, indexTemplate, (err) => {
        if (err !== null) {
            console.log('Something wrong ', err); 
        }
    });
    return dirPath;
}).catch((err) => {
    console.log('Something wrong ', err); 
});
//create.sh file in root folder
//bash create.sh - example of command in terminal
