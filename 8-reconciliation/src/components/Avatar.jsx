import Image from './Image'
import DeleteUploadControls from './DeleteUploadControls'

const Avatar = (props) => {
  const renderImage = () => <Image {...props.imageProps} />

  if (props.editMode) {
    return (
      <div>
        {renderImage()}
        <DeleteUploadControls />
      </div>
    )
  }
  return <div>{renderImage()}</div>
}

export default Avatar
