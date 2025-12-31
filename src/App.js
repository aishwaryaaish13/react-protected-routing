import { Routes, Route } from "react-router-dom";
import { useState, lazy, Suspense } from "react";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Todos from "./pages/Todos";
import TodoDetails from "./pages/TodoDetails";
import ProtectedRoute from "./components/ProtectedRoute";
import MultiStepForm from "./components/MultiStepForm";
import ProductList from "./components/ProductList";
const HeavyComponent = lazy(() => import("./components/HeavyComponent"));

const productsData = Array.from({ length: 1000 }, (_, index) => ({
  id: index + 1,
  name: `Product ${index + 1}`,
  price: 100,
}));

function App() {
  const [counter, setCounter] = useState(0);
  const [products] = useState(productsData);

  console.log("🔁 App component rendered");

  // ❌ Without optimization
  const totalPriceWithoutMemo = products.reduce(
    (sum, product) => sum + product.price,
    0
  );

  const handleProductSelectWithoutCallback = (product) => {
    console.log("Selected (without optimization):", product.name);
  };

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

      <hr />

    
      <div style={{ padding: "20px" }}>
        <h2>React.memo & Lazy Loading Demo</h2>

        <button onClick={() => setCounter(counter + 1)}>
          Counter: {counter}
        </button>

        <hr />

        
        <Suspense fallback={<p>Loading Heavy Component...</p>}>
          <HeavyComponent />
        </Suspense>

        <hr />

        <h3>❌ Without Optimization (Products)</h3>
        <p>Total Price: ₹{totalPriceWithoutMemo}</p>

        <ProductList
          products={products}
          onSelectProduct={handleProductSelectWithoutCallback}
        />
      </div>
    </>
  );
}

export default App;
