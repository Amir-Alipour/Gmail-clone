import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Mail from "./pages/mail/Mail";
import EmailList from "./pages/emaillist/EmailList";
import SendMail from "./components/SendMail";
import { useSelector } from "react-redux";
import { selectSendMailIsOpen } from "./features/mailSlice";

function App() {
    const sendMessageIsOpen = useSelector(selectSendMailIsOpen)

    return (
        <Router>
            <div className="App">
                <Header />

                <div className="app__body">
                    <Sidebar />

                    <Switch>
                        <Route path="/mail/:id">
                            <Mail />
                        </Route>
                        <Route exact path="/">
                            <EmailList />
                        </Route>
                    </Switch>
                </div>

                {sendMessageIsOpen && <SendMail />}
            </div>
        </Router>
    );
}

export default App;
