import React,{useContext} from 'react'
import {NavLink,useNavigate} from 'react-router-dom'
import emptyavatar from './avatar.svg'
import {SearchBar} from './SearchBar'
import {UserContext} from '../contexts/UserContext'


export const TopBar=({posts,setPosts,setLoggedIn})=> {
  const {user,logoutUser}=useContext(UserContext)
  const navigate=useNavigate()
console.log('TopBar-user:',user)

const logout=()=>{
  const userData={
    userId:0,
    userName:'',
    avatar:'',
    userStory:''
  }
  logoutUser(userData)
  setLoggedIn(false)
  navigate('/')
}
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <div className="navbar-brand" >
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-pinterest"></i>
    </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">

      <ul className="navbar-nav mx-auto">
        <li className="nav-item">
          <NavLink to="/" className="nav-link " aria-current="page" href="#">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/aboutme" className="nav-link" href="#">Rólam</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/write" className="nav-link" href="#">Írj</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" className="nav-link " href="#"  >Kapcsolat</NavLink>
        </li>
      </ul>

      <ul className="navbar-nav ms-auto">
      {!user.userName&& (<li className="nav-item">
          <NavLink to="/login" className="nav-link " aria-current="page" href="#">Bejelentkezés</NavLink>
        </li>)}
       {!user.userName&& (<li className="nav-item">
          <NavLink to="/register" className="nav-link" href="#">Regisztráció</NavLink>
        </li>)}
        {user.userName&& (<li className="nav-item btn" onClick={logout}>
          {/*<NavLink to="/logout" className="nav-link" href="#">Kijelentkezés</NavLink>*/}
          Kijelentkezés
        </li>)}
      </ul>

    </div>
    <SearchBar posts={posts}/>
    <div>
        {user.userName &&  <NavLink to="/settings">
                    <img  className="top-img" src={user.avatar?user.avatar:emptyavatar} alt={user.avatar} title={user.userName}/>
                </NavLink>
           }
    </div>
  </div>
</nav>
    </div>
  )
}
