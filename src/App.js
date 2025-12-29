import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Todos from "./pages/Todos";
import TodoDetails from "./pages/TodoDetails";
import ProtectedRoute from "./components/ProtectedRoute";
import MultiStepForm from "./components/MultiStepForm";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />

      <Route
        path="/todos"
        element={
          <ProtectedRoute>
            <Todos />
          </ProtectedRoute>
        }
      />

      <Route
        path="/todos/:todoId"
        element={
          <ProtectedRoute>
            <TodoDetails />
          </ProtectedRoute>
          
        }
      />
    </Routes>
      <h1 style={{ textAlign: "center" }}>User Registration</h1>
      <MultiStepForm />
    </>
  );
}

export default App;
