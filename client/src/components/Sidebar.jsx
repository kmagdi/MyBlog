import React,{useContext} from "react";
import myPhoto from "./myPhoto.jpg";
import {MyContext} from '../MyContext'
import {useNavigate}from 'react-router-dom'

export const Sidebar = () => {
  const navigate=useNavigate()
  const { categ,selCateg,setSelCateg } = useContext(MyContext);

  const handleSelCateg=(id)=>{
    console.log('handle:',id)
    setSelCateg(id)
    navigate('/')
  }

  return (
    <div className="sidebar mt-2 bg-light rounded d-flex flex-column align-items-center">
      <div className=" d-flex flex-column align-items-center">
        <span className="m-2 p-2 text-center w-75 border-top border-bottom">Rólam</span>
        <img className="mt-2 p-2" src={myPhoto} alt="I" />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. 
        </p>
      </div>
      <div className=" d-flex flex-column align-items-center">
        <span className="border-bottom pb-2">Kategóriák</span>
        <ul className="sidebarList">
            <li className={selCateg==0?"text-success text-decoration-underline":"text-secondary"} onClick={()=>setSelCateg(0)}>Minden</li>
            {categ.map(obj=>
              <li key={obj.id} className={obj.id==selCateg?"text-success text-decoration-underline":"text-secondary"} onClick={()=>handleSelCateg(obj.id)}>{obj.name}</li>
              )}
        </ul>
      </div>
    <div className=" d-flex flex-column align-items-center">
    <span className="sidebarTitle">Kövess</span>
    <div className="d-flex align-items-center justify-content-center mt-3">
        <i className="ms-2 fa-brands fa-facebook-square" role="button"></i>
        <i className="ms-2 fa-brands fa-pinterest-square" role="button"></i>
        <i className="ms-2 fa-brands fa-instagram-square" role="button"></i>
    </div>
    </div>
    </div>
  );
};
