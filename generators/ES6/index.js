'use strict';
const yeoman = require('yeoman-generator');
const yosay = require('yosay');

module.exports = yeoman.Base.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Let\'s make you an ES6 Module!'
    ));

    const prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of this module?'
      },
      {
        type: 'input',
        name: 'description',
        message: 'Give us a brief description of the module'
      },
      {
        type: 'input',
        name: 'author',
        message: 'What is your name?'
      }
    ];

    return this.prompt(prompts)
      .then(props => {
        // To access props later use this.props.someAnswer;
        this.props = props;
        this.props.year = (new Date()).getFullYear();
        this.props.safeName = this.props.name.replace(/ /g, '-');
      });
  },

  writing: function () {
    this.fs.copyTpl(
      this.templatePath('**/*'),
      this.destinationPath('./'),
      this.props
    );
  },

  install: function () {
    this.npmInstall();
  }
});
