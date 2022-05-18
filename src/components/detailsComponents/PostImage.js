import React from 'react'
import ImageGallery from 'react-image-gallery'

const PostImage = (props) => {
  const post = props.post

  return (
    <div>
      <ImageGallery items={post.images} />
    </div>
  )
}

export default PostImage
