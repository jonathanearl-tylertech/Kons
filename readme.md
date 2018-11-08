11/8/2018
#Kons - Construction Website hosted @ https://kons.joanthanearl.io

Design by [Logan Lee](https://dribbble.com/shots/3761787-Kons-Construction-Firm-Website)

## Purpose
1. Make a beautiful responsive website from static reference
2. Use best practices in styling using BEM / SASS
3. Reinforce knowlege from Webpack config
4. Reinforce knowlege from AWS to host site

## Requirements
Links checked 11/2018
* [Git](https://git-scm.com/downloads)
* [NPM](https://www.npmjs.com/get-npm) & [Yarn](https://yarnpkg.com/lang/en/docs/install/)
* [AWS CLI](https://aws.amazon.com/cli/)
* OSX (not tested in windows)

## Installation
Clone (Git)
```bash
git clone https://github.com/whattheearl/kons.git
```

Install dependencies (Yarn)
```
cd kons
yarn
```

## Uses
### Development
I set up webpack dev server with hot reload for faster development. This allowed for hot reloading so that the browser did not need to be refreshed for changes. I also added Sass preprocessor plugin so that CSS could be written using nested syntax making it more readable as well as ability to use variables.

Run development server locally
```
yarn dev
```

### Build
In this project I decided not to minify the processed CSS, JS and HTML. As this is a sample project to demonstrate my ability to write clean code. I wanted users to be able to inspect the code and get something understandable.

Build project and output to /dist
```
yarn build
```

## Responsive Design
The page was built from the reference design pdf and added media query break points as the design broke working from desktop view to mobile. This was done using CSS Flex box to adjust from row layout to column layout based on the media query of the width of the page. As the containers no longer had room to fit the content the containers widened and stacked vertically to ensure enough space.

![](KonsDemo.gif)

## Webpack Configuration
Webpack is a bit of a bear to configure, in setting it up for both development and build I learned a bit about the use of plugins and the configuration of the webpack.config.js. I feel that it is very good for as a build tool, but would warn against using it for development! If you dont have it set up perfectly you will consistantly run into road blocks and will need to experiment with plugins and configs to get it to do what you want (mostly). 

Webpack also does not default to what I believe most people would believe to be normal file seperation in web development. HTML and CSS files require a loader, is injected into a generated HTML file via JS.

### Plugins
#### HtmlWebpackPlugin: 
Required if you want your entry point to be HTML instead of JS with a generated HTML file. This is the common use case for most developers. It also allows faster time to interaction as you dont need to load the entire JS before rendering something on the screen

#### CleanWebpackPlugin:
Simple plugin just deletes your build folder, I can see this simplfying cross os development if you dont want to use a node package like rmraf

#### CopyWebpackPlugin:
will copy files directly into your distribution folder. I found this useful as my images were linked in the HTML file. These will not be automatically added to your distribution folder if you use standard img references (`<img src='/assets/img/cutekitty42' alt='cutest kitten' />`) unless you:

* use import in SCSS and set the image using background-image. 
* Or use lodash template (I did not test this) `<img src="<%=require('./src/assets/logo.png')%>">` inside your html if your using HtmlWebpackPlugina. Assets are not seen unless imported via JS somewhere.

I decided to use CopyWebpackPlugin as I wanted to stay with standard HTML, and background images are treated differently than standard images.

