'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the geometric ${chalk.red('generator-devyo')} generator!`)
    );

    const prompts = [
      {
        type: 'confirm',
        name: 'someAnswer',
        message: 'Would you like to enable this option?',
        default: true
      },
      {
        type: 'input',
        name: 'proj',
        message: 'What is your project name?',
        default: 'foo'
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {

    this.fs.copyTpl(
      this.templatePath('README.md'),
      this.destinationPath('README.md'),
      { proj: this.props.proj }
    );

  }

  // install() {
  //   this.installDependencies();
  // }
};
