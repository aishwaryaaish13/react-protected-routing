import React from "react";

const HeavyComponent = React.memo(() => {
  console.log("🔥 HeavyComponent rendered");

  
  let total = 0;
  for (let i = 0; i < 100000000; i++) {
    total += i;
  }

  return (
    <div style={{ padding: "20px", background: "#f0f0f0", marginTop: "20px" }}>
      <h2>Heavy Component</h2>
      <p>This component is expensive to render.</p>
    </div>
  );
});

export default HeavyComponent;
