# cmis-browser — A simple web based CMIS repository browser
[![Build Status](https://travis-ci.org/mikar/cmis-browser.svg?branch=master)](https://travis-ci.org/mikar/cmis-browser)
![MIT License](https://img.shields.io/npm/l/express.svg?style=flat)

## About this project

### What is CMIS?

> [CMIS](http://docs.oasis-open.org/cmis/CMIS/v1.0/cmis-spec-v1.0.html) is an open standard by [OASIS](https://www.oasis-open.org/committees/tc_home.php?wg_abbrev=cmis) that allows different content management systems to inter-operate over the Internet. Specifically, CMIS defines an abstraction layer for controlling diverse document management systems and repositories using web protocols. (source: [Wikipedia](https://en.wikipedia.org/wiki/Content_Management_Interoperability_Services))

CMIS tries to do for content and document management systems what OBDC did for relational databases which is industry wide standardization of interaction with these Database/Content management systems.  

### Cool, now what's this project all about?

cmis-browser provides some very basic functionality to browse and manipulate CMIS repositories like:  
* User login and authentication  
* Browse and list files and folders  
* Upload and download files and folders  
* Show metadata of files and folders  

However, it does not (currently) support the many advanced features of the CMIS specification like:  
* Relationships  
* Renditions  
* Policies  
* Extensions  
* Queries  
* TypeDefinitions  

## Getting Started

### Prerequisites

* git: [http://git-scm.com/](http://git-scm.com/)
* npm: [http://nodejs.org/](http://nodejs.org/)

### Installation

Clone the angular-seed repository using git:  

```
git clone https://github.com/mikar/cmis-browser.git
cd cmis-browser
npm install
```

### Run the Application

Start with `npm start` and browse to the app at `http://localhost:8000/app/index.html`.


## Testing

### Running Unit Tests (Karma)

The following command will start a Karma test runner that runs the unit tests once  
on load and then whenever a file is changed.  
```
npm test
```

You can also ask Karma to do a single run of the tests and then exit via: 

```
npm run test-single-run
```


### End to end testing (Jasmine)

End to end tests are being run with Protractor. And since Protractor is built  
on WebDriver we need to install it (once):  

```
npm run update-webdriver
```

Start the development web server, if it isn't running already:  

```
npm start
```

Once you have ensured that the development web server hosting our application is up and running
and WebDriver is updated, you can run the end-to-end tests using the supplied npm script:

```
npm run protractor
```

This script will execute the end-to-end tests against the application being hosted on the
development server.


## Updating Angular

You can update the tool dependencies by running:

```
npm update
```

This will find the latest versions that match the version ranges specified in the `package.json` file.

You can update the Angular dependencies by running:

```
bower update
```

This will find the latest versions that match the version ranges specified in the `bower.json` file.


## Loading Angular Asynchronously

The angular-seed project, which this project is based on, supports loading the framework  
and application scripts asynchronously.  The special `index-async.html` is  
designed to support this style of loading.  For it to work you must inject a piece  
of Angular JavaScript into the HTML page.  The project has a predefined script to help do this:  

```
npm run update-index-async
```

This will copy the contents of the `angular-loader.js` library file into the `index-async.html` page.
You can run this every time you update the version of Angular that you are using.


## Serving the Application Files

### Running the App during Development

This project comes preconfigured with a local development webserver.  It is a node.js
tool called [http-server](https://github.com/nodeapps/http-server). You can start this webserver with `npm start` but you may choose to install the tool globally:

```
sudo npm install -g http-server
```

Then you can start your own development web server to serve static files from a folder by
running:

```
http-server -a localhost -p 8000
```

Alternatively, you can choose to configure your own webserver, such as apache or nginx. Just
configure your server to serve the files under the `app/` directory.

### Running the App in Production

This really depends on how complex your app is and the overall infrastructure of your system, but
the general rule is that all you need in production are all the files under the `app/` directory.
Everything else should be omitted.

Angular apps are really just a bunch of static html, css and js files that just need to be hosted
somewhere they can be accessed by browsers.

If your Angular app is talking to the backend server via xhr or other means, you need to figure
out what is the best way to host the static files to comply with the same origin policy if
applicable. Usually this is done by hosting the files by the backend server or through
reverse-proxying the backend server(s) and webserver(s).

