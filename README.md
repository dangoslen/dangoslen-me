# dangoslen-me
Personal Website Repository

## Is this over the top?
Probably. But oh well. 

## Installing and Building
Everything is set up under ```NPM``` and ```Grunt```. I don't have a ton of front-end dependecies right now, so I'm not bothering with too many additional package managers.

### Install
If you want to set everything up, you just need to run ```npm install``` to get ```less```, ```grunt```, and a few other dependencies.

### Build
Simply run ```grunt```. 

This will run the default task which simply compiles the less in css and watches for file changes. 

For a "production" build, just run ```grunt production```. This will compile and minimize the less/css and uglify the small javascript used for the email form.

### Tools and Dependencies
* Font-Awesome (https://github.com/FortAwesome/Font-Awesome) for icons. Its pretty cool.
* Less (https://github.com/less/less.js) for CSS pre-processing. No, its not SASS and I'm not gonna engage in that fight.
* Skeleton (https://github.com/dhg/Skeleton/) for basic setup and responsiveness starter.
* Angular 1
* Grunt
* NPM
