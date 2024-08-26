// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;









import Home from "./home";
// import Login from "./login";
import Navbar from "./navbar";
import Hero from "./hero";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  // let content;
  // let isLogin = false;
  // if(isLogin){
  //   content = <Home/>
  // }else{
  //   content = <Login/>
  // }
  return (
    <>
    <Navbar/>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/login" element={<Login />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}


// let content;
// let isLogin = false;
// if(isLogin){
//   content = <Home/>
// }else{
//   content = <Login/>
// }

// {
  /* <h1>Hello</h1>
    <p>hello world</p>
    <SignUp/> */
// }

// {
  /* <Home/> */
// }
// {
  /* <Navbar/>
      {true ? (
        <>
          <Home />
@@ -20,9 +44,5 @@ function App() {
        <>
          <Login />
        </>
      )}
    </>
  );
      )} */
// }

export default App;