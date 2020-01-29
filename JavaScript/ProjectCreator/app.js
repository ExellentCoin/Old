const exec = require('child_process').exec;
const mkdirp = require('mkdirp');
const push = require('git-push');
const fs = require('fs');
const parameters = process.argv;

function createProject() {

    mkdirp(`D:/Jos/Bureaublad/Jonas/MyProjects/GitProjects/${parameters[2]}/${parameters[3]}`);
    
    fs.writeFile(`D:/Jos/Bureaublad/Jonas/MyProjects/GitProjects/${parameters[2]}/${parameters[3]}/app.js`, "init", function (err) {
        if (err) {
            return console.log(err);
        }
    });

    exec(`git add -A`, (err, stdout, stderr) => {
        process.stdout.write(stdout);
    });

    exec(`git commit -m "initial commit"`, (err, stdout, stderr) => {
        process.stdout.write(stdout);
    });

    push(`D:/Jos/Bureaublad/Jonas/MyProjects/GitProjects`, 'https://github.com/ExellentCoin2044/Projects.git');
}

createProject();

//console.log(parameters);$null 