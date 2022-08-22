import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignIn, SignUp, Home, TodoList } from "./pages/index";
import "./App.css";
import "antd/dist/antd.css";
const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/todos" element={<TodoList />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
