import { Routes, Route } from "react-router-dom";
import { useState, useMemo, useCallback } from "react";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Todos from "./pages/Todos";
import TodoDetails from "./pages/TodoDetails";
import ProtectedRoute from "./components/ProtectedRoute";
import MultiStepForm from "./components/MultiStepForm";
import ProductList from "./components/ProductList";




const productsData = Array.from({ length: 1000 }, (_, index) => ({
  id: index + 1,
  name: `Product ${index + 1}`,
  price: 100,
}));

function App() {
  
  
  const [counter, setCounter] = useState(0);
  const [products] = useState(productsData);

  
  
  const totalPriceWithoutMemo = products.reduce(
    (sum, product) => sum + product.price,
    0
  );

  const handleProductSelectWithoutCallback = (product) => {
    console.log("Selected (without useCallback):", product.name);
  };

  
  
  const totalPriceWithMemo = useMemo(() => {
    console.log("Calculating total price with useMemo...");
    return products.reduce((sum, product) => sum + product.price, 0);
  }, [products]);

  const handleProductSelectWithCallback = useCallback((product) => {
    console.log("Selected (with useCallback):", product.name);
  }, []);

  return (
    <>
      {
      }
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

      {
      }
      <h1 style={{ textAlign: "center" }}>User Registration</h1>
      <MultiStepForm />

      <hr />

      {
      }
      <div style={{ padding: "20px" }}>
        <h2>React Performance Optimization</h2>

        <button onClick={() => setCounter(counter + 1)}>
          Counter: {counter}
        </button>

        <hr />

        <h3>❌ Without Optimization</h3>
        <p>Total Price: ₹{totalPriceWithoutMemo}</p>
        <ProductList
          products={products}
          onSelectProduct={handleProductSelectWithoutCallback}
        />

        <hr />

        <h3>✅ With useMemo & useCallback</h3>
        <p>Total Price: ₹{totalPriceWithMemo}</p>
        <ProductList
          products={products}
          onSelectProduct={handleProductSelectWithCallback}
        />
      </div>
    </>
  );
}

export default App;
