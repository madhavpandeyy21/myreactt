import React from 'react'

export default function EvaluateExpression() {
    let x=20;
    let y=10;
  return (
    <div>
      <h1>EvaluateExpression</h1>
      <h3>{"x"} {"y"} {":"} {x > y ? "True" : "False"}</h3>
    </div>
  );
}
