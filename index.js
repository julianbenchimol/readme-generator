const inquierer = require('inquirer');
const fs = require('fs');

inquierer.prompt([
    {
        type: 'input',
        message: 'Please Input Project Title: ',
        name: 'projectTitle'
    },
    {
        type: 'input',
        message: 'Please Input Project Description: ',
        name: 'description'
    },
    {
        type: 'list',
        message: 'Please Choose a License: ',
        name: 'licenseType',
        choices: ['GNU APGLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT']
    },
    {
        type: 'input',
        message: 'Please Input GitHub Username: ',
        name: 'githubUsername'
    },
    {
        type: 'input',
        message: 'Please Input preferred Email: ',
        name: 'email'
    },
    
])
.then((answers)=>{
    let input = Object.values(answers);

    const [projectTitle, description, licenseType, githubUsername, email] = input;

    fs.appendFile('readme.md', `<h1>Project title: ${projectTitle}</h1>\n`, (err)=>
    err ? console.error(err) : console.log('')
    )
    fs.appendFile('readme.md', `<h2>Project Description: ${description}</h2>\n`, (err)=>
    err ? console.error(err) : console.log('')
    )
    fs.appendFile('readme.md', `<h4>License Type: ${licenseType}</h4>\n`, (err)=>
    err ? console.error(err) : console.log('')
    )
    fs.appendFile('readme.md', `<h4>GiHub Username: ${githubUsername}</h4>\n`, (err)=>
    err ? console.error(err) : console.log('')
    )
    fs.appendFile('readme.md', `<h4>Email: ${email}</h4>\n`, (err)=>
    err ? console.error(err) : console.log('Saved!')
    )

})
