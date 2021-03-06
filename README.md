# RSMint

The Front End App for the Redstone Mheta Internal Intranet App that'll interface with the Server side "*Ninja*" app.  

### What is the UX?

Below is a snapshot of the App with the Users' *master-detail* view. Also shown is the user
experience that will be displayed for smaller device sizes. The responsive layout changes to hide
the user list, reveal the **menu** button. In the User Details view, you may also click the
**share** button  to show the Contact &lt;User&gt; bottom sheet view.

<br/>

![material-starter-ux2](https://cloud.githubusercontent.com/assets/210413/6448551/70864488-c0e0-11e4-8767-c4e1e4c2f343.png)

![Wireframe](https://cloud.githubusercontent.com/assets/210413/6444676/c247c8f8-c0c4-11e4-8206-208f55cbceee.png)

<br/>

This app demonstrates how:

*  Angular Material `layout` and `flex` options can easily configure HTML containers
*  Angular Material components `<md-toolbar>`, `<md-sidenav>`, `<md-icon>` can be quickly used
*  Custom controllers can use and show `<md-bottomsheet>` with HTML templates
*  Custom controller can easily, programmatically open & close the SideNav component.
*  Responsive breakpoints and `$mdMedia` are used
*  Theming can be altered/configured using `$mdThemingProvider`
*  ARIA features are supported by Angular Material and warnings can be used to improve accessibility.

> The application architecture **completely** seperates the front end app from the server side app


#### Install Dependencies

We have two kinds of dependencies in this project: tools and AngularJS framework code.  The tools
help us manage and test the application.

* We get the tools we depend upon via `npm`, the [node package manager][npm].
* We also get the AngularJS and Angular Material library code via `npm`

```
npm install
```

You should find that you have one new folder in your project:

 - `node_modules` - contains the npm packages for the tools we need


## Directory Layout

```
app/                    --> all of the source files for the application
  assets/app.css        --> default stylesheet
  src/                  --> all app specific modules
     users/             --> package for user features
  index.html            --> app layout file (the main html template file of the app)
```


## Serving the Application Files

While AngularJS is client-side-only technology and it is possible to create AngularJS web apps that
don't require a backend server at all, we recommend serving the project files using a local web
server during development to avoid issues with security restrictions (sandbox) in browsers. The
sandbox implementation varies between browsers, but quite often prevents things like cookies, xhr,
etc to function properly when an html page is opened via the `file://` scheme instead of `http://`.

### Running the App during Development

The angular-material project comes pre-configured with a local development web server. It is a
node.js tool called [live-server][live-server].

You can run the following command to start the server:

```
 node ./node_modules/live-server/live-server.js . --open=app
```

This should open your browser to [http://localhost:8080/app/](http://localhost:8080/app/) so you
can view the Material-Start app.

You can install also live-server globally to make life easier and for use with other applications:

```
npm install -g live-server
```

Then you can start your own development web server to serve static files from a folder by running:

```
cd my-project
live-server .
```

Finally, you can choose to configure your a different webserver, such as apache or nginx. Just
configure your server to serve the files under the `app/` directory.

## Updating Angular

Previously we recommended that you merge in changes to angular-seed into your own fork of the
project. Now that the AngularJS framework library code and tools are acquired through package managers
(npm) you can use these tools instead to update the dependencies.

You can update the tool dependencies by running:

```
npm update
```

This will find the latest versions that match the version ranges specified in the `package.json` file.


## Contact

For more information on AngularJS please check out http://angularjs.org/

For more information on Angular Material, check out https://material.angularjs.org/

[git]: http://git-scm.com/
[bower]: http://bower.io
[npm]: https://www.npmjs.org/
[node]: http://nodejs.org
[travis]: https://travis-ci.org/
[live-server]: https://www.npmjs.com/package/live-server
