import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//PAGES IMPORT:
// import PrincipalPage from "./pages/principalPage.jsx";
import HomePage from "./pages/HomePage.jsx";

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<HomePage />} />
    //     <Route path="/login" element={<h1>Login Page</h1>} />
    //     <Route path="/register" element={<h1>Register Page</h1>} />
    //     <Route path="/tasks" element={<h1>Tasks Page</h1>} />
    //     <Route path="/add-task" element={<h1>Add task Page</h1>} />
    //     <Route path="/task/:id" element={<h1>Task Page</h1>} />
    //     <Route path="/profile" element={<h1>Profile Page</h1>} />
    //   </Routes>
    // </BrowserRouter>
    <HomePage />
  );
}

export default App;
