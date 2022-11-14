import * as React from 'react'
import Avatar from './components/Avatar'

export default function App() {
  const [editMode, setEditMode] = React.useState(false)

  return (
    <div id="app-root-id">
      <Avatar editMode={editMode} />
      <button onClick={() => setEditMode((prev) => !prev)}>
        Toggle Edit Mode
      </button>
    </div>
  )
}
