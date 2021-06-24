import React, { useTransition, Suspense, useState } from "react";
import { DataFetch } from "./components/DataFetch";

function App() {
  const [value, setValue] = useState("");
  const [isRefreshing, startRefreshing] = useTransition();
  const handleChange = (e: any,) => {
    const { value } = e.target;
    startRefreshing(() => {
      setValue(value);
    });
  };

  return (
    <div className="App">
      <input type="text" onChange={handleChange} value={value} />

      <div style={{ opacity: isRefreshing ? 0.5 : 1 }}>
        <Suspense fallback={<h1>Loading...</h1>}>
          <DataFetch num={value} />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
