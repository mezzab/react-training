import { createPortal } from 'react-dom'

const withPortal = (Comp) => {
  return (props) => createPortal(<Comp {...props} />, document.body)
}

export default withPortal
