// import React, { useState } from "react";
// import BookList from "./book-list";
// import UStateBasics from "./usestate-basic";
// import Github from "./github";
// import MultipleReturns from "./multiple-return-statement";
// import ShortCircuit from "./short-curcit";
// import Ternary from "./ternary";
// import ShowAndHideComponent from "./show-hide-component";
// import FromController from "./froms-controller.js";
// import RefBasics from "./userefbasics";
// import PropertiyDrilling from "./prop-drilling";
// import ContextApi from "./context-api";
// import PersonInfo from "./person-info";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import About from "./Pages/About";
// import Products from "./Pages/Products";
// import Error from "./Pages/Error";
// import Home from "./Pages/Home";
// import SharedLayout from "./Pages/SharedLayout";
// import GithubPropdrilling from "./github-copy-propdrilling";
// import SingleProduct from "./Pages/SingleProduct";
// import ReducerCount from "./reducer-counter-with-dispacher-function";
// import ReducerCount1 from "./ReducerContext/reducer-counter";
// import TimeCounter from "./time-counter";
// // import PersonInfo from './context-api';
// import Birthday from "./BirthdayReminderApp/Birthday";
// import Login from "./Pages/Login";
// import DashBoard from "./Pages/DashBoard";
// import ProtectedRoute from "./Pages/ProtectedRoute";
// import AllProducts from "./Shpping_cart/AllProducts";
// import Cart from "./Shpping_cart/Cart";
// import ReduxCounter from "./ReduxCounter";

// const App = () => {
//   const [user, setUser] = useState("");
//   console.log(user); //{fname:'', email:''}

//   //   const [cart, setCart] = useState([]);

//   return (
//     <BrowserRouter>
//       <nav>Welcome to React Routing</nav>
//       <Routes>
//         {/* <Route path='/' element={<Home />} />
//                 <Route path='about' element={<About />} />
//                 <Route path='products' element={<Products />} />
//                 <Route path='*' element={<Error />}/> */}

//         {/* <Route path='/' element={<SharedLayout />} >
//                     <Route  index element={<Home/>}/>
//                     <Route path='about' element={<About />} />
//                     <Route path='products' element={<Products />} />
//                     <Route path='products/:bid' element={<SingleProduct />} />
//                     <Route path='*' element={<Error />}/>
//                 </Route> */}
//         {/* <Route path='/' element={<SharedLayout />} >
//                 <Route path='/login' element={<Login setUser={setUser} />} />
//                 <Route path='/dashboard' element={<ProtectedRoute user={user}><DashBoard user={user}/></ProtectedRoute>} />
//                 </Route> */}
//         <Route path="/" element={<SharedLayout />}>
//           <Route index element={<Home />} />
//           <Route path="/allproducts" element={<AllProducts />} />
//           <Route path="/cart" element={<Cart />} />
//           <Route path="/booklist" element={<BookList />} />
//           <Route path="/usestate" element={<UStateBasics />} />
//           <Route path="/github" element={<Github />} />
//           <Route path="/multiplereturn" element={<MultipleReturns />} />
//           <Route path="/shortcurcuit" element={<ShortCircuit />} />
//           <Route path="/ternary" element={<Ternary />} />
//           <Route
//             path="/showandhidecomponent"
//             element={<ShowAndHideComponent />}
//           />
//           <Route path="/fromcontroller" element={<FromController />} />
//           <Route path="/refbasics" element={<RefBasics />} />
//           <Route path="/propertitydrilling" element={<PropertiyDrilling />} />
//           <Route path="/contextapi" element={<ContextApi />} />
//           <Route path="/githubpropdrilling" element={<GithubPropdrilling />} />
//           <Route path="/reducercounter" element={<ReducerCount />} />
//           <Route path="/reducercounter1" element={<ReducerCount1 />} />
//           <Route path="/timecounter" element={<TimeCounter />} />
//           <Route path="/birthdaycounter" element={<Birthday />} />
//           <Route path="/reduxcounter" element={<ReduxCounter />} />
//         </Route>
//       </Routes>
//       <footer>THank you For visiting</footer>
//     </BrowserRouter>

//     // <React.Fragment>
//     //   {/* <BookList /> */}
//     //   {/* <UStateBasics /> */}
//     //   {/* <Github /> */}
//     //   {/* <MultipleReturns /> */}
//     //   {/* <ShortCircuit /> */}
//     //   {/* <Ternary /> */}
//     //   {/* <ShowAndHideComponent /> */}
//     //   {/* <FromController /> */}
//     //   {/* <RefBasics /> */}
//     //   {/* <PropertiyDrilling /> */}
//     //   {/* <ContextApi /> */}
//     //   {/* <PersonInfo /> */}
//     //   {/* <GithubPropdrilling /> */}
//     //   {/* <ReducerCount /> */}
//     //   {/* <ReducerCount1 /> */}
//     //   {/* <TimeCounter /> */}
//     //   {/* <Birthday /> */}
//     //   <ReduxCounter />
//     // </React.Fragment>
//   );
// };

// export default App;

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import Home from "./Home";
import StudentsView from "./component/student/StudentsView";
import NavBar from "./component/common/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddStudent from "./component/student/AddStudent";
import EditStudent from "./component/student/EditStudent";
import StudentPofile from "./component/student/StudentProfile";
import DashboardSVG from "./Pages/DashboardSVG";

function App() {
  return (
    <main className="container mt-5">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/view-students" element={<DashboardSVG />}></Route>
          <Route exact path="/add-students" element={<AddStudent />}></Route>
          <Route
            exact
            path="/edit-student/:id"
            element={<EditStudent />}
          ></Route>
          <Route
            exact
            path="/student-profile/:id"
            element={<StudentPofile />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
