import React from 'react'
import ImageGallery from 'react-image-gallery'

const PostImage = (props) => {
  const post = props.post
  console.log(post.images)
  return (
    <div>
      <ImageGallery items={post.images} />
    </div>
  )
}

export default PostImage
