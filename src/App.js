import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { publicRoute } from './routers/index'
import { Fragment } from 'react';


function App() {
  return (
    <Router>
      <Routes>
        {
          publicRoute.map((item,index) =>{
            const Page = item.component
            return <Route key={index} path={item.path} element={<Fragment><Page/></Fragment>}></Route>
          })
      }
      </Routes>
    </Router>
  );
}

export default App;
