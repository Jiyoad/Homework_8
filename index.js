const inquirer = require("inquirer");
const fs = require("fs");
const path = require('path')
const generateMarkdown = require('./utils/generateMarkdown.js');


// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project"
    },
    {
        type: "input",
        name: "description",
        message: "Give a description of your program/repository"
    },

    {
        type: "input",
        name: "username",
        message: "What is your github username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },
    {
        type: "input",
        name: "install",
        message: "Any installation instructions for your project?"
    },
    {
        type: "input",
        name: "usage",
        message: "Give any usage instructions that you have for your program"
    },
    {
        type: "input",
        name: "contributions",
        message: "How to contribute to this project?"
    },
    {
        type: "input",
        name: "test",
        message: "Test instructions."
    },
    {
        type: "checkbox",
        name: "license",
        message: "What License(s) does your project have?",
        choices: [" afl-3.0 (Academic Free License v3.0)", " apache-2.0 (Apache License 2.0)", " artistic-2.0 (Artistic License2.0)", " bsl-1.0 (Boost Software License)",
            " bsd-2-clause (BSD 3-clause Clear License)", " bsd-3-clause (BSD 3-clause 'New' or 'Revised' License)", " bsd-3-clause-clear (BSD 3-clause Clear license)",
            " cc (Creative Commons License Family)", " cc0-1.0 (Creative Commons Zero v1.0 Universal)", " cc-by-4.0 (Creative Commons Attribution 4.0)", " cc-by-sa-4.0 (Creative Commons Attribution Share Alike 4.0)",
            " wtfpl (Do What the F*ck You Want To Public License)", " ecl-2.0 (Educational Community License v2.0)", " epl-1.0 (Eclipse Public License 1.0)", " epl-2.0 (Eclipse Public License 2.0)", " eupl-1.1 (European Union Public License 1.1)",
            " agpl-3.0 (GNU Affero General Public License v3.0)", " gpl (GNU General Public License Family)", " gpl-2.0 (GNU General Public License v2.0)", " gpl-3.0 (GNU General Public License v3.0)", " lgpl (GNU Lesser General Public License Family)",
            " lgpl-2.1 (GNU Lesser General Public License v2.1)", " lgpl-3.0 (GNU Lesser General Public License v3.0)", " isc (ISC)", " lppl-1.3c (LaTeX Project Public License v1.3c)", " ms-pl (Microsoft Public License)", " mit (MIT)", " mpl-2.0 (Mozilla Public License 2.0)",
            " osl-3.0 (Open Software License 3.0)", " postgresql (PostgreSQL License)", " ofl-1.1 (SIL Open Font License 1.1)", " ncsa (University of Illinois/NCSA Open Source License)", " unlicense (The Unlicense)", " zlib (zLib License)"]
    }
];

// function to write README file
function writeFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(response => {

        console.log("Preparing README...");
        writeFile("./README.md", generateMarkdown(response));
    })
}

// function call to initialize program
init();
