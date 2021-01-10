import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { Helmet } from "react-helmet";

const Home = () => (
  <div>
    <Helmet>
      <title>Home</title>
      <meta name='description' content='Home: This is homepage'></meta>
    </Helmet>
    <h2>Home</h2>
    <p>
      This is the home page!
    </p>
  </div>
)

const About = () => (
  <div>
    <Helmet>
      <title>About</title>
      <meta name='description' content='About: This is About'></meta>
    </Helmet>
    <h2>About</h2>
    <p>
      This is the about page!
    </p>
  </div>
)

const Contact = ({ match }) => (
  <div>
    <Helmet>
      <title>Contact</title>
      <meta name='description' content='Contact: This is Contact'></meta>
    </Helmet>
    <h2>Contact</h2>
    <p>
      This is the contact us page!
    </p>
  </div>
)

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
