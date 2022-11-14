## is a React element a DOM element?

No, it will eventually be a DOM element.

---

## what is wrong with this code?

```
const App = (props) => {
  return (
    <>
      {messages && <MessageList messages={props.messages} />}
    </>
  )
}

```

1. messageList should be MessageList
2. condition

---
