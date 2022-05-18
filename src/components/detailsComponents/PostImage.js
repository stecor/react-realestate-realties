import React from 'react'
import ImageGallery from 'react-image-gallery'

const PostImage = (props) => {
  const images = props.post.images

  return (
    <div>
      <ImageGallery items={images} />
    </div>
  )
}

export default PostImage
