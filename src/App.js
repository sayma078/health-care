import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Context/AuthProvider";
import About from "./pages/About/About";
import Details from "./pages/Details/Details";
import FAQ from "./pages/FAQ/FAQ";
import Home from "./pages/Home/Homee/Homee";
import NotFound from "./pages/Home/NotFound/NotFound";
import PrivateRoute from "./pages/Login/PrivateRoute/PrivateRoute";
import Signin from "./pages/Login/Signin/Signin";
import SignUp from "./pages/Login/SignUp/SignUp";
import Footer from "./pages/Shared/Footer/Footer";
import Header from "./pages/Shared/Header/Header";

function App() {
  return (
    <AuthProvider>
    <div className="App">
      
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/login">
              <Signin></Signin>
            </Route>
            <Route path="/faq">
              <FAQ></FAQ>
            </Route>
            <Route path="/signup">
              <SignUp></SignUp>
            </Route>
            <PrivateRoute path="/Details/:id">
              <Details></Details>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
        </div>
      </AuthProvider>
   
  );
}

export default App;
