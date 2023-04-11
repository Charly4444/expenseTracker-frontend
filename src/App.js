import Users from './components/users'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Error from './components/error'
import Home from './components/home'
import User from './components/user'
import Expense from './components/expense'
import Navbar from './components/navbar'
// by using router, run "npm install react-router-dom" in project folder

function App() {
    return <Router>
      <div className='container'>
        {/* the navbar */}
        <Navbar/>
        
        <Routes>
          <Route exact path="/" Component={Home} />

          <Route exact path="/users" Component={Users} />
          {/* the ':' is used to show a path variable that will come in */}
          <Route exact path="/users/:id" Component={User} />

          <Route exact path="/exp" Component={Expense} />

          {/* thats for every other page; already that doesnt match above*/}
          <Route path="*" Component={Error} />
          
        </Routes>

        <footer>&copy; Charliexstyles 2017</footer>
      </div>
    </Router>;
  };

export default App
