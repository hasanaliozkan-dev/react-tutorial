import Header from "./Header";
import Footer from "./Footer";
import MainContent from "./MainContent";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="#">Disabled</a>
                </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    );history
}

function MainContent() {
    return(<h1>I'm learning react!</h1>);
}

function Lists(){
    return(
                <div> 
                    <h5>Unordered Lists</h5>
                    <ul>
                        <li>Test1</li>
                        <li>Test2</li>
                        <li>Test3</li>
                        <li>Test4</li>
                    </ul>
                    <h5>Ordered Lists</h5>
                    <ol>
                        <li>Test1</li>
                        <li>Test2</li>
                        <li>Test3</li>
                        <li>Test4</li>
                    </ol>

                </div>
    );
}

ReactDOM.render(
    <div>
        <Navbar />
        <MainContent />
        <Lists />
    </div>,
    document.getElementById("nav")
)

//Imperative way 
const h1 = document.createElement("h1")
h1.textContent = "This is an imperative way to program"
h1.className = "header"
document.getElementById("root").append(h1)

//Declarative way

//ReactDOM.render(<h1 className ='header'> Hello, React </h1>, document.getElementById("root")); 

const element = <h1>Hello, React</h1>;
console.log(element);
ReactDOM.render(element, document.getElementById("root"));

//ReactDOM.render(<h1>Hello everyone!</h1>, document.getElementById('root'));

/*
Challenge:
Create a navbar in JSX:
    - Use the semantic `nav` element as the parent wrapper
    - Have an h1 element with the brand name of your "website"
    - Insert an unordered list for the other nav elements
        - Inside the `ul`, have three `li`s for "Pricing",
        "About", and "Contact"
    - Don't worry about styling yet - it'll just be plain-looking HTML for now
*/

const navbar = (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <h1 className="navbar-brand">My Website</h1>
        <ul className="navbar-nav mr-auto">
            <li className="nav-item active ml3">Pricing</li>
            <li className="nav-item active ml3">About</li>
            <li className="nav-item active ml3">Content</li>
        </ul>
    </nav>
)

//After react 18 
ReactDOM.createRoot(document.getElementById("challenge1")).render(navbar)



/**
Challenge: find out what happens if we try to append JSX
to our div#root using .append() instead of ReactDOM

1. Create a sample page in JSX (≥ 4 elements) and save them in a variable
2. Select the div with the ID of "root" and use `.append()` to append
   your JSX
3. See if you can guess what will show up in the browser before running
   the code
4. See if you can explain what actually shows up in the browser
*/

const page = (
    <div>
        <h1 className="navbar-brand">My Website</h1>
        <ul className="navbar-nav mr-auto">
            <li className="nav-item active ml3">Pricing</li>
            <li className="nav-item active ml3">About</li>
            <li className="nav-item active ml3">Content</li>
            <li className="nav-item active ml3">Pricing</li>
            <li className="nav-item active ml3">About</li>
            <li className="nav-item active ml3">Content</li>
        </ul>   
    </div>
)


//document.getElementById("challenge2").append(JSON.stringify(page))

ReactDOM.createRoot( document.getElementById("challenge2")).render(page)


/*
Challenge: Starting from scratch, build and render the 
HTML for our section project. Check the Google slide for 
what you're trying to build.

We'll be adding styling to it later.

Hints:
* The React logo is a file in the project tree, so you can
  access it by using `src="./react-logo.png" in your image
  element
* You can also set the `width` attribute of the image element
  just like in HTML. In the slide, I have it set to 40px
 */


function Image() {
    return (
        <div>
            <img src="./react-logo.png" width="120px" />
            <h1>Fun facts about React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
    )

}
//ReactDOM.createRoot(document.getElementById("challenge3")).render(Image())
ReactDOM.createRoot(document.getElementById("challenge3")).render(<Image />)

/**
Challenge: 

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page

*/

function ChallengePage() {
    return(
        <ol>
            <li>I'm excited to be learning React</li>
            <li>I'm excited to be learning React</li>
            <li>I'm excited to be learning React</li>
            <li>I'm excited to be learning React</li>
            <li>I'm excited to be learning React</li>
        </ol>
    )
}

ReactDOM.createRoot(document.getElementById("challenge4")).render(<ChallengePage />)


/**
Challenge: 

Part 2: 
- Add a `header` element with a nested `nav` element. Inside the `nav`,
  include a `img` element with the image of the React logo inside
  (src="./react-logo.png") and make sure to set the width to something
  more manageable so it doesn't take up the whole screen
- Add an `h1` with some text describing the page. (E.g. "Reasons
  I'm excited to learn React"). Place it above the ordered list.
- Add a `footer` after the list that says: 
    "© 20xx <last name here> development. All rights reserved."
*/

function ChallengeWholePage() {

    return (
        <div>
            <Header />
            <MainContent /> 
            <Footer />
        </div>
    );
}

ReactDOM.createRoot(document.getElementById("challenge5")).render(<ChallengeWholePage />)


/**
Mini Challenge:
Move the `header` element from Page into 
its own component called "Header"


function Header(){
    return(
    <header>
        <nav className="nav">
            <img  className = "nav-logo" src="./react-logo.png" width="120px" />
            <ul className="nav-items">
                <li className="nav-item active ml3">Pricing</li>
                <li className="nav-item active ml3">About</li>
                <li className="nav-item active ml3">Content</li>
            </ul>
        </nav>
    </header>
    )
}
*/
/**
Challenge: 

- Move the `footer` into its own component called "Footer" 
  and render that component inside the Page component.
- Move the `h1` and `ol` together into another component
  called "MainContent" and render inside Page as well.


function Footer(){
    return(
        <footer>
                © 2022 OZKAN development. All rights reserved.
            </footer>
    )
}

function MainContent(){
    return(
        <div>
            <h1>Reasons I'm excited to learn React</h1>
            <ChallengePage />
        </div>
    )
}
*/