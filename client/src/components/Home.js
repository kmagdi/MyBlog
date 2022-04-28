import React,{useEffect, useContext} from 'react'
import { Header } from './Header'
import {Posts} from './Posts'
import { Sidebar} from './Sidebar'
import axios from 'axios'
import {MyContext} from '../MyContext'


export const Home=({admin,setPosts,posts})=> {
  const {selCateg}=useContext(MyContext)
  useEffect(()=> {
    fetchPosts()
  },[selCateg,admin])

  console.log('admin=',admin)
  const fetchPosts=async ()=>{
    let url=''
    if(!admin)
            url= selCateg===0? '/posts':'/posts/categ/'+selCateg
    else
          url= selCateg===0? '/posts/admin':'/posts/admin/categ/'+selCateg
    
    try {
      const resp=await axios.get(url)
      setPosts(resp.data)
    }catch(err){
      console.log(err)
    }
  }
console.log(posts)

  return (
    <>
     <Header />
     <div className="row">
       <Posts posts={posts} />
       <Sidebar  />
     </div>

    </>
  )
}
