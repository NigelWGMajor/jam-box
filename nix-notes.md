# Jam-box

## Initial setup

```code
ng new jam-box
cd jam-box
ng g c navigation
ng generate c home
ng g component schedule
ng g component music
ng g c studio
ng g c projects
ng g c contact
ng g s storage
ng g s authentication
npm install
npm start

code .

```
Gitcraken PAT:
pf719447c6fb5e8334d3bda723e2e6b1448ff955d
Nigel Major
(logged in through my GitHub account)

## Set up routing and navigation

(in app-routing.module.ts)
- [ ] import all components:
`import { HomeComponent } from './home/home.component';`
- [ ] add paths to Routes:
```
 {path: '', component: HomeComponent },
 {path: 'contact', component: ContactComponent }
 ```

(in app.component.html)
- [ ] replace everything with:
```code
<app-navigation></app-navigation>
<section>
  <router-outlet></router-outlet>
</section>
```
(in app.navigation)
- [ ] replace html with:

```xml
<header>
  <div class="container">
    <a routerLink="/" class="logo">{{ appTitle }}</a>
    <nav>
      <ul>
        <li><a routerLink="/">Home</a></li>
        <li><a routerLink="/about">About</a></li>
        <li><a routerLink="/contact">Contact us</a></li>
      </ul>
    </nav>
  </div>
</header>
 ```

- [ ] At this stage you can verify that this works, you should just get a simple list of links that should work.
- [ ] add scss to style the list (you can see the effect by saving regularly!):
```

```scss
header {
  background: #152681;

  .logo {
    font-weight: bold;
  }
  nav {
    justify-self: right;

    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
    }

    li {
      float: left;

      a {
        padding: 1.5em;
        text-transform: uppercase;
        font-size: 0.8em;
      }
      &:hover {
        background: hsl(229, 55%, 54%);
      }
    }
  }
}
```
- [ ] Add a base font style to the main app.component.css
```css
:host /deep/ {
  .jb-main {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    background: #000000;
    color: #ccc;
  }
}
```
- [ ] and add class references to ech of your main comonents:
```xml
<p class="jb-main">
  music works!
</p>
```
Now you have a system-wide font ...

Next we cleaned up some display issues so that we would have a dark background to the very edges...
in app.component template:
```xml
<body class="jb-main">
  <app-navigation class="jb-zone-head"></app-navigation>
  <section class="jb-zone-middle">
    <router-outlet></router-outlet>
  </section>
</body>
```
then in the scsc:
```css
:host /deep/ {
  .jb-main {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    background: #000000;
    color: #cccccc;
    margin: 0;
 
    }
    .container {
        width: 50%;
        margin: 0 auto;
        padding: 1.3em;
        display: grid;
        grid-template-columns: 30% auto;
    }
}
  .jb-zone-middle {
    position: absolute;
    top: 70px;
       left: 0px; /* Gap left */
    right: 0; /* Gap right */
    bottom: 0;
    background-color: navy;
  }
  .jb-zone-head {
    position: absolute;
    top: 0px;
    left: 0px; /* Gap left */
    right: 0; /* Gap right */
    height: auto;
    background-color: navy;
  }
  ```
# Install sqlite3
`npm install --save-dev sqlite3`

I am adding the "tutorial startup" pieces to the storage.service.ts file.
That way we can use the database by injecting it into any module.

Look at the storage service file to see what i did!

I also installed a utility, SqlLiteStudio to simplify db setup.

I installed @ngrx:
`npm install npm install @ngrx/core @ngrx/store @ngrx/effects @ngrx/store-devtools @ngrx/router-store --save`

and also @ngrx/schematics:
`npm install @ngrx/schematics --save-dev`

This should allow me to automate some of the setup operations for the store.
So first install verify install (different couyrcse, maybe different subset):

`npm install @ngrx/store @ngrx/effects @ngrx/entity @ngrx/store-devtools --save`

Insert initial state management:
`ng generate @ngrx/schematics:store State --root --statePath store --module app.module.ts`
to simplifty the command line, add the @ngrx/schematics to your angular cli:
`ng config cli.defaultCollection @ngrx/schematics`
Initial Effects:
`ng generate effect App --root --module app.module.ts`
Make an app/model folder for the classes ....
then we can add model...

`ng generate interface model/user`
and pad with a few properties

Need actions for login by user (later other stuff too):
`ng generate action store/actions/user`

Now, the user.actions.ts is populated with an enum, a class for each and export a type.  We also set up the default constructor...
(look at the file)

Make a reducer in the store folder for users to handle user actions that are synchronous!
`ng generate reducer store/reducers/user`

/* ng g directives: (from ng g --help)
    container
    directive
    effect
    entity
    enum
    feature
    guard
    interface
    library
    module
    ng-add
    pipe
    reducer
    service
    serviceWorker
    store
    universal
    */

Now I want to make a user effect too, as I expect that some user actions will be asynchronous:
`ng generate effect store/effects/user`

With that in place, it's time to set up a database.

Used sqlite studio to make a Players table with Id, Name, Key and Description. The Key defauts to "1234".
"Visitor" has an Id of 0, an empty key and the description is "Anonymous Visitor to the site".

We want to modify the startup so that it "logs in" as Vistor initially, and allows the user to log in by providing the key.

It also needs to show us who is logged in of course.

We can simplify our access rules: if the prevailing player id is 0 it is the visitor, otherwise it's a real player.

## CSS Grid: <(-- deprecated!

I want the layout to switch easily by zone for different orientations.  Primarily I expect to have a "normal" landscape mode (e.g. 1920 * 1080), a half-monitor (e.g. 960 * 1080) and perhaps a skinny mode for phones (e.g. 640 * 1080).  I'd like the page to be responsive around these at least.

I would like to set this up at he outset so that I am able to test this begore I start messing with content.

I intend doing this with css grid: I can set up styles base on different media.

I find it easier to visualize in functional zones:
- H: Header is a strip along the top that can be used for titles, messages and "universal" controls (probably in the corners) for things like login, settings, contact ... this should always be accessible, but does not take up much room.
- B: Banner is an area for a horizontal graphical strip.  This is intended as a visual anchor, a ststic content element that test the tone of the site, and provides a backdrop to the actual navigation controls
- C: Context switches are possibly overlaid over the banner, and provide switching between different contextss. These navigation controls are used to access all the main portions of the site.  This should always be available unless in some semi-modal operation.
- T: Title info.
- P: Pager is an area that can provide additional information on the current page, perhaps also navigating or power-scrolling the page.  Inlike the banner, this is typically organized vertically and is concise and narrow.
- S: Split is a vertical separator, possibly graphical, that separates the summary from the main content area.  It might overlap with the summary.
- M: Main pPanel is the main content area.  This should be scrollable as appropriate, possibly power-driven by the summary.
- F: Footer is a strip across the bottom that can be used for status messages.

| - - - - - - - - - - - - - - - - - - - - - - |      | - - - - - - - - - - - - - |
|               header                        |      |         header            |
| - - - XXX - - - - - - - - - - - - - - - - - |      | - - - - - - - - - - - - - |
|       XXX   banner/context                  |      |       banner/context      |
| - - - XXX - - - - - - - - - - - - - - - - - |      | - - - - - - - - - - - - - |
| Title XXX::::::::::::::::::::::::::::::::::||      | Title                     |
| - - - XXX::::::::::::::::::::::::::::::::::||      |::::::::::::::::::::::::::||
| Pager XXX::::::::::::::::::::::::::::::::::||      |::::::::::::::::::::::::::||
|       XXX::::::::::::::::::::::::::::::::::||      |::::::::::::::::::::::::::||
| - - - XXX - - - - - - - - - - - - - - - - - |      |::::::::::::::::::::::::::||
|             footer                          |      |::::::::::::::::::::::::::||
| - - - - - - - - - - - - - - - - - - - - - - |      |::::::::::::::::::::::::::||
                                                     |::::::::::::::::::::::::::||
                                                     |::::::::::::::::::::::::::||
                                                     |::::::::::::::::::::::::::||
                                                     | - - - - - - - - - - - - - |
                                                     |        footer             |
                                                     | - - - - - - - - - - - - - |

This translates to grid template:
Wide:                                                Narrowest:
header header header header                          header header header
  .    split  banner banner                          title  banner banner
title  split  major  major                           macro  macro  macro
macro  split  major  major                           major  major  major
footer footer footer footer                          footer footer footer

Middle:                                                     
header header header 
split  title  banner banner
split  macro  major  major
footer footer footer

Let's apply this to the scss for the main page!

## Grid out, flex in! <(-- also deprectated - IE fails to wrap 

Grid fails miserably in IE though, so I'm going back to using FlexBox.

branch 0412 starts this refactor.

We are using the grid currently in 4 places so these should be handlable:
I'm refactoring tin this sequence:

- app.component         the main page
- header.component      the top line
- navigation.component  the nav bar
- contact.component     the test page accessed through the contact.
 
## noFlex definitions added!

These are intended to use lower level (read ancient) methods to avoid some of the flex pitfalls.
I plan to test these on one of the next layouts.  Basically should allow simplification of the dependencies for the major display elements.

## Latest:

I used mat-sidenav for the test contacts page.  This could maybe be eliminated by using the new "basic" table structure to get things working properly.



# NEXT:

I have already put the framework in place for all the pages, the main interface, the navigation and the reducers and effects are set up.  I have a provisional layout working although I will want to migrate this to css flex soon. I also migrated the underlying color choices to variables in a ColorScheme at the root of the project. I generated some sample graphics too so I can integrate these too. 
There is already a sqlite database in place and I have set up a simple table to manage logon information.

## Code-wise

- Connect the login page to the service that will provide authentication through an effect;
- Have the service respond with success or failure to the reducers;
- Have the state change on a successful log on reflect back to the header and footer through an observable.

This will frame out the main functional loops.

## UI-wise

- Refactor the main page so that the main zones resize correctly at most resolutions; <(-- use @medium
- Apply some simple animations to provide subtle transitios.