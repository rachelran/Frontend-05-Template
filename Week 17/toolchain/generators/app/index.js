var Generator = require("yeoman-generator");

module.exports = class extends (
  Generator
) {
  constructor(args, opts) {
    super(args, opts);
    this.option("babel"); 
  }

  async writing() {
    let answer = await this.prompt([
      {
        type: "input",
        name: "name",
        message: "your Project name",
        default: this.appname,
      },
    ]);
    let des = await this.prompt([
      {
        type: "input",
        name: "desc",
        message: "your desc",
        default: `my ${answer.name} project`,
      },
    ]);

    this.log(answer.name);
    this.log(answer.description);
    const pkgJson = {
      devDependencies: {
        eslint: "^3.15.0",
      },
      dependencies: {
        react: "^16.2.0",
      },
    };

    this.fs.extendJSON(this.destinationPath("package.json"), pkgJson);
  }

  install() {
    this.npmInstall();
  }
};