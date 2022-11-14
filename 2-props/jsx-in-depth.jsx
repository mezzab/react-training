// Specifying Children and close tag like XML
const element = (
  <div>
    <p>Hello World</p>
    <p/>
  </div>
)

// This is a component and should have been capitalized:
function Hello(props) {
  // Correct! This use of <div> is legitimate because div is a valid HTML tag:
  return <div>Hello {props.toWhat}</div>
}

function HelloWorld() {
  // Wrong! React thinks <hello /> is an HTML tag because it's not capitalized:
  return <Hello toWhat="World" />
}

// Props Default to “True”
<MyTextBox  />
<MyTextBox autocomplete={true} />


// Spread attributes
function App1() {
  return <Greeting firstName="Ben" lastName="Hector" />;
}

function App2() {
  const props = {firstName: 'Ben', lastName: 'Hector'};
  return <Greeting {...props} />;
}


// Booleans, Null, and Undefined Are Ignored
<div />
<div></div>
<div>{false}</div>
<div>{null}</div>
<div>{undefined}</div>
<div>{true}</div>


<div>
  {showHeader && <Header />}
  <Content />
</div>

<div>
  {props.messages.length > 0 &&
    <MessageList messages={props.messages} />
  }
</div>

