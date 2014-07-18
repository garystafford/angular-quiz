<a href='https://travis-ci.org/garystafford/angular-quiz'><img src='https://travis-ci.org/garystafford/angular-quiz.svg?branch=master'></a>
<a href='https://david-dm.org/garystafford/angular-quiz'><img src='https://david-dm.org/garystafford/angular-quiz.png'></a>
<a href='https://david-dm.org/garystafford/angular-quiz#info=devDependencies'><img src='https://david-dm.org/garystafford/angular-quiz/dev-status.png'></a>

##AngularJS Dynamic Quiz Example

AngularJS-based Quiz project for blog post, [Data-Driven Form Design with AngularJS's Two-Way Data Binding and Custom Directives](http://wp.me/p1RD28-1eo). Uses two-way data binding and custom directives to create and display a quiz, with multiple types of questions, from a JSON file.

####Highlights
* Project based on [Yeoman generator for AngularJS] (http://yeoman.io).
* Basic and advanced quiz examples. Read the blog post for more information.
* Reads JSON data files, using a $resource in factory services.
* JSON files contain quiz data: questions, choices, answer, etc.
* Displays questions based on question type: multiple choice, multiple correct, or true-false, using custom directives.
* Demonstrates the use of an Angular filter, custom directives, and the use of partials view templates.

####Installation
Install GitHub project
```
git clone https://github.com/garystafford/angular-quiz.git
```

Install base project using generator-angular
```
npm install -g generator-angular
mkdir quizApp && cd $_
yo angular quizApp
yo angular:route quizAdvanced
yo angular:factory quizAdvancedFactory
yo angular:directive quizTrueFalseDirective
```

Start Project `grunt serve`

Test Project `grunt test`

####TO-DO's
* Document project requirements and installation
* Document project features and objectives
* Add functionality to save multiple results to file with username and timestamp
