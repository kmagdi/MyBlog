import React from 'react'
import {Sidebar} from './Sidebar'
import {SinglePost} from './SinglePost'
import {useParams} from 'react-router-dom'

export const Single=({userId})=> {
  const {postId,imageId} = useParams()
  return (
    <div className="row">
      <SinglePost  postId={postId} userId={userId} imageId={imageId}/>
      <Sidebar  />
    </div>
  )
}
