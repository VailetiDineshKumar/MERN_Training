import React, { useState, useEffect } from "react";

const Conditional = () => {
  const [isDark, setIsDark] = useState(false);

  // This runs whenever isDark changes
  useEffect(() => {
    document.body.style.backgroundColor = isDark ? "#222" : "#f5f5f5";
    document.body.style.color = isDark ? "white" : "black";
  }, [isDark]);

  return (
    <div>
      <button onClick={() => setIsDark(prev => !prev)}>
        Toggle Background
      </button>
    </div>
  );
};

export default Conditional;