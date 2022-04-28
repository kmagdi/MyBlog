import React,{useState,useEffect,Fragment} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import {useConfirm} from 'material-ui-confirm'
import parse from 'html-react-parser';


export const SinglePost=({postId,userId,imageId})=> {
  const navigate = useNavigate()
  const confirm=useConfirm()
  const [post,setPost]=useState({})
  const [msg,setMsg]=useState('')
  const [loading, setLoading] = useState(false);
  useEffect(()=> {
    setLoading(true);
    fetchPost()
    return () => setLoading(false);
  },[postId])
  

  console.log('singlepost:',postId,'userId:',userId,'-',post.user_id)
  const url=`/posts/${postId}`

  const fetchPost=async ()=>{
    try {
      const resp=await axios.get(url)
      setPost(resp.data[0])
      
    }catch(err){
      console.log(err)
    }
  }
  
console.log(post)
const handleDelete=()=>{
  confirm({description:parse(`Biztosan ki szeretnéd törölni a <strong>${post.title}</strong> című posztot?`)})
    .then(()=>{deletePost()})
    .catch(()=>{console.log('confirm box hiba!')})
}
const deletePost=async ()=>{
  console.log('delete')
  try{
    const resp=await axios.delete(`/posts/${postId}/${imageId}`)
    setPost({})
    setMsg('Sikeres törlés!')

  }catch(err){console.log(err)}
}

if(!loading) {
  return null;
}
  return (
    <div className="singlePost">
       <div className="p-3">
        {post.id &&  <img src={post.image} alt={post.title}  />}
          <h3 className="text-center m-2">
             {post.title}
              <div className="singlePostEdit text-end">
                 <i role="button" className={userId==post.user_id? "fa-solid fa-pen-to-square text-success": "d-none"}
                    onClick={()=>navigate('/editPost/'+post.id)}></i>
                 <i role="button" className={userId==post.user_id? "fa-solid fa-trash-can ms-3 text-danger": "d-none"}
                    onClick={()=>handleDelete()}></i>
              </div>
          </h3>
          <div>{msg}</div>
          <div className="d-flex justify-content-between mb-2 text-secondary">
            <span className="singlePostAuthor">{post.username}</span>
            <span className="singelPostDate">1 órával ezelőtt</span>
          </div>
          {post.body && <p>{parse(post.body)}</p>}
      </div>                          
    </div>
  )
}