'use strict';
const yeoman = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

// Key = pretty name
// Value = generator name
const generators = {
  'ES6 Module': 'ES6'
};

module.exports = yeoman.Base.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      `Welcome to the amazing ${chalk.red('MarshallOfSound')} generator!`
    ));

    const prompts = [
      {
        type: 'list',
        name: 'generator',
        choices: Object.keys(generators),
        message: 'Which generator do you want to run?'
      }
    ];

    return this.prompt(prompts)
      .then(props => {
        this.props = props;
      });
  },

  writing: function () {
    // Do nothing
  },

  install: function () {
    this.spawnCommand('yo', [`mos:${generators[this.props.generator]}`]);
  }
});
