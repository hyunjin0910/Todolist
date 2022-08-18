import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignIn, SignUp, Home, TodoList, CreateTodo } from "./pages/index";
import "./App.css";
const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/todoList" element={<TodoList />} />
          <Route path="/createTodo" element={<CreateTodo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
