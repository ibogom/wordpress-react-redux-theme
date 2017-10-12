You are welcome to use this project if it is a better fit for your needs, but if you are brand new to the ecosystem I highly recommend checking out something that has received more recent updates.

# REACT REDUX BOILERPLATE
[![Build Status](https://travis-ci.org/ibogom/react-redux-boilerplate.svg?branch=master)](https://travis-ci.org/ibogom/react-redux-boilerplate/builds/277822177)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

This project was started as development tools that should help web developers create new web sites/application. 

## Installation

After confirming that your environment meets the above requirements, you can create a new project based on `react-redux-boilerplate` by doing the following:

```bash
$ git clone https://github.com/ibogom/react-redux-boilerplate <my-project-name>
$ cd <my-project-name>
```

When that's done, install the project dependencies with `npm install`.

```bash
$ npm install
```

## Running the Project

After completing the installation step, you're ready to start the project!

```bash
$ npm start  # Start the development server
```

## Project structure

The project structure presented in this boilerplate is **fractal**, where functionality is grouped primarily by feature rather than file type. This structure is only meant to serve as a guide, it is by no means prescriptive. That said, it aims to represent generally accepted guidelines and patterns for building scalable applications

```
.
|-- /configs                             # Webpack configs folder
|   |-- base.config.js                   # Base webpack config with default properties
|   |-- dev.config.js                    # Developement webpack config   
|   |-- prod.config.js                   # Production webpack config
|   |-- jest.config.js                   # Configurations of the Unit tests (Jest)
|-- /src                                 # Application source code
|   |-- /assets                          # In this folder is stored images/fonts and css themes
|   |   |-- /themes                      # Css themes folder
|   |       |--/default                  # Default theme folder
|   |          |-- _color_scheme.scss    # Scss file with default scss color variables 
|   |          |-- _fonts.scss           # Scss file with fonts/icons and font variables 
|   |          |-- main.scss             # Main scss file of the default theme
|   |-- /js                              # Js folder
|   |   |--/actions                      # In this folder will be stored reducer action
|   |   |--/components                   # Global Reusable Components
|   |   |--/containers                   # Global Reusable Containers/Layouts Components
|   |   |--/pages                        # Pages routing
|   |   |--/reducers                     # Application reducers folder
|   |   |--/stores                       # Application stores folder
|   |   |--/test                         # Tests folder
|   |   |--main.js                       # Application bootstrap and rendering
|   |--index.html                        # Main HTML page container for app
```

## Styles
I am using `BEM` architecture here and also make default CSS naming map at the webpack config.

```javascript
{
    test: /\.scss$/,
    exclude: /node_modules/,
    use: extractSass.extract({
        fallback: 'style-loader',

        use: [
            {
                loader: 'css-loader',
                query: {
                    modules: true,
                    sourceMap: true,
                    importLoaders: 2,
                    /** CHANGE CSS NAME MAP ON THE OTHER WAY YOU LIKE **/
                    localIdentName: '[name]__[local]___[hash:base64:5]'
                }
            },
            'sass-loader'
        ]
    })
}
           
```

This sass configuration provide ability to get css styles with JS import. Example: 

```javascript

/* components/header/header.js */

import React from 'react';
import PropTypes from 'prop-types';

 /** IMPORT CSS CLASSES WITH HELP OF JS IMPORT **/
import {header, left, right, middle} from './header.scss';
 
export default class Header extends React.Component {
 
     constructor(props){
         super(props);
     }
 
     render(){
         return(<div className={header}>
             <div className={left}>
 
             </div>
             <div className={middle}>
 
             </div>
             <div className={right}>
 
             </div>
         </div>)
     }
 };

````  
```scss
/* components/header/header.js */
$header-height: 50px;

.header{
  width: 100%;
  position: relative;
  display: table;
  height: $header-height;
  background-color: $scnd-clr;
  .right{
    width: 20%;
    display: table-cell;
  }
  .middle{
    width: 60%;
    display: table-cell;
  }
  .left{
    width: 20%;
    display: table-cell;
  }
}
```
As you can see you can easily import scss class names into your project and set styles directly to the html tags. 
## Tests
I am using `jest` for testing.  So everything you need is just open you console/terminal and type following command:

```bash
$ npm test
```

### Test structure

```
.
|
|--/src
   |--/js
      |--/test                      # Main tests source folder
         |-- __mocks__              # Application mocks should be stored here
         |--/components             # Components test folder 
            |-- footer.test.js      # Footer component test
            |-- header.test.js      # Header tomponent test
         |--/containers             # Containers test folder
            |-- app.test.js         # App container test
```

## Thank you 

I am more than happy to accept external contributions to the project in the form of feedback, bug reports and even better - pull requests :)

Thanks for checking this out.

- Ievgen Bogomolov 