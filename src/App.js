
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import FAQ from './pages/FAQ/FAQ';
// import FAQ fro./pages/FAQ/FAQfaq';
import Home from './pages/Home/Homee/Homee';
import NotFound from './pages/Home/NotFound/NotFound';
import Signin from './pages/Login/Signin/Signin';
import SignUp from './pages/Login/SignUp/SignUp';
// import SignUP from './pages/Login/SignUp/SignUp';

import Footer from './pages/Shared/Footer/Footer';
import Header from './pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
        <Route exact path ="/">
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
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
          <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
