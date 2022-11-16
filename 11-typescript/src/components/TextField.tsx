import React, { useRef, useState } from "react";

interface Props {
  text?: string,
  cb?: () => void
  number?: number
  showShow?: boolean
}

export const TextField = (props: Props) => {
  const [text, setText] = useState('')

  const inputRef = useRef<HTMLInputElement | null>(null)

  return (
    <div>
      <input ref={inputRef} onChange={(e) => setText(e.target.value)} />
      <h2>{text}</h2>
    </div>
  );
};


// FC
// props
// hooks
// useState, useRef

