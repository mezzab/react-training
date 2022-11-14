import React from 'react'

const DeleteUploadControls = () => {
  const onDeleteClick = () => console.log('Delete')
  const onUploadClick = () => console.log('Upload')

  return (
    <div>
      <button onClick={onDeleteClick}>Delete</button>
      <button onClick={onUploadClick}>Upload</button>
    </div>
  )
}

export default DeleteUploadControls
