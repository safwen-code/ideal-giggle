import "./App.css";

import React from "react";
import { BrowserRouter as Router, Route ,Switch } from "react-router-dom";
import Header from "./component/Header";
import ContentMovies from "./component/ContentMovies";
import Footer from "./component/Footer";
import { Container } from "react-bootstrap";

import { Provider } from "react-redux";
import store from "./store";
import ContentProfile from "./component/ContentProfile";
import ContentPosts from "./component/ContentPosts";
function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Header />
          <Switch>
          <Container>
            <Route exact path="/home" component={ContentMovies} />
            <Route exact path="/profiles" component={ContentProfile}/>
            <Route path="/AllPosts" component={ContentPosts}/>
          </Container>
          </Switch>
          
          <Footer />
        </Router>
      </Provider>
    </>
  );
}

export default App;
