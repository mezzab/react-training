import React, { useState } from "react";

interface ChildrenProps { count: number, setCount: (c: number) => void }

interface Props {
  children: (p: ChildrenProps) => JSX.Element | null
}

export const Counter: React.FC<Props> = ({ children }) => {
  const [count, setCount] = useState(0);

  return <div>{children({ count, setCount })}</div>;
};
