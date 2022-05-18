import React from 'react'

const PostInfo = (props) => {
  const post = props.post

  return (
    <div>
      <img src={post.userImg} alt='userImg' />
      <p>{post.user}</p>
    </div>
  )
}

export default PostInfo
