import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignIn, SignUp, Home, TodoList } from "./pages/index";
import "./App.css";
import "antd/dist/antd.css";
import { store } from "./store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <div className="app">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/todos" element={<TodoList />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;
