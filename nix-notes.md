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






