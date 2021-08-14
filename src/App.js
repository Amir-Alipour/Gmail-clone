import React from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Mail from "./pages/mail/Mail";
import EmailList from "./pages/emaillist/EmailList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="App">
                <Header />

                <div className="app__body">
                    <Sidebar />

                    <Switch>
                        <Route path="/mail">
                          <Mail />
                        </Route>
                        <Route exact path="/">
                          <EmailList />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
