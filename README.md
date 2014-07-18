<a href='https://travis-ci.org/garystafford/angular-quiz'><img src='https://travis-ci.org/garystafford/angular-quiz.svg?branch=master'></a>
<a href='https://david-dm.org/garystafford/angular-quiz'><img src='https://david-dm.org/garystafford/angular-quiz.png'></a>
<a href='https://david-dm.org/garystafford/angular-quiz#info=devDependencies'><img src='https://david-dm.org/garystafford/angular-quiz/dev-status.png'></a>

##AngularJS Dynamic Quiz Example

AngularJS-based Quiz project for blog post, [Data-Driven Form Design with AngularJS's Two-Way Data Binding and Custom Directives](http://wp.me/p1RD28-1eo). Uses two-way data binding and custom directives to create and display a quiz, with multiple types of questions, from a JSON file.

####Highlights
* Project based on [Yeoman generator for AngularJS] (http://yeoman.io). Installed using npm generator-angular -g.
* Reads JSON data files, using a factory services, containing quiz data: questions, choices, answer, etc.
* Displays questions dynamically based on question type: multiple choice, multiple correct, or true-false, using custom directives.
* Uses single controller and single view with multiple directives and partial HTML files for each question type.
* Demonstrates the use of filtering within controller, use of custom directives, and the use of partials.

####Installation
install github project

```bash
git clone https://github.com/garystafford/angular-quiz.git
```

install base project using generator

```bash
npm install -g generator-angular
mkdir project_name_here && cd $_
yo angular app_name_here
```

####TO-DO's
* Document project requirements and installation
* Document project features and objectives
* Add functionality to save multiple results to file with username and timestamp
