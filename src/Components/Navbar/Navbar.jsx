
import { useEffect, useState } from "react";
import "./Navbar.scss"
import {Link, useLocation } from "react-router-dom";


const Navbar = () => {
  const [active,setactive]=useState(false);
  const [optionsActive, setUserOptions] = useState(false);
  const {pathname}=useLocation()
  console.log(pathname)
  const isActive=()=>{
    window.scrollY>0 ?setactive(true) :setactive(false)
  }

  // const [userIn,setUserIn]=useState(false)

  // const currentUser={
  //   id:1,
  //   username:"Anu",
  //   isSeller:true
  // }

const currentUser=null;


  // const isUserIn=()=>{id==1 ?setUserIn(true):setUserIn(false)}
  // isUserIn();


  useEffect(()=>{
    window.addEventListener("scroll",isActive);
    return ()=>{
      window.removeEventListener("scroll",isActive)
    };
  },[])
  return (
    <>
      {pathname != "/logoMaker" ?
        <div className={active || pathname != "/" ? "navbar active" : "navbar"}>
        <div className="Container">
          <div className="Logo">
            <Link to="/Orders" className="link">
              <span className="text">fiver</span>
              <span className="dot">.</span>
            </Link>
          </div>
          <div className="Links">
            <span className="linksItem">Fiver Buisness</span>
            <span className="linksItem">Explore</span>
            <span className="linksItem">English</span>
            {!currentUser?.id && <span className="linksItem">Become a Seller</span>}
            {!currentUser?.id && <span className="linksItem">Sign In</span>}
            {!currentUser?.id == 1 && <button>Join</button>}

            {currentUser?.id == 1 && (
              <div
                className="Profile"
                onClick={() => {
                  optionsActive ? setUserOptions(false) : setUserOptions(true);
                }}
              >
                <img
                  src="https://imgs.search.brave.com/8ZH1FEnJukV2qqUonNh-bVJs0FhZ1S7GW9dZ0vH506c/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzE5MTgyNzY4L3Iv/aWwvNmE4ZTc5LzM3/MDEwNDE1MjgvaWxf/NjAweDYwMC4zNzAx/MDQxNTI4X21kNzcu/anBn"
                  className="profilePhoto"
                />
                <span className="profileName">Anu</span>
              </div>
            )}

            {optionsActive && (
              <div className="options">
                {currentUser?.isSeller ? (
                  <>
                    <span className="linksItem">Gigs</span>
                    <span className="linksItem">Add a new Gig</span>
                    <span className="linksItem">Orders</span>
                    <span className="linksItem">Messages</span>
                    <span className="linksItem">Logout</span>
                  </>
                ) : (
                  <>
                    <span className="linskItem">Orders</span>
                    <span className="linksItem">Messages</span>
                    <span className="linksItem">Logout</span>
                  </>
                )}
              </div>
            )}
          </div>
        </div>

         
        {(active || pathname !== "/" ) && (
          <>

            <hr  className="navbarHR"/>
            <div className="Menu">
              <span className="menuItem">Graphics and Design</span>
              <span className="menuItem">Video and Animation</span>
              <span className="menuItem">Writing and Transalation</span>
              <span className="menuItem">AI services</span>
              <span className="menuItem">Digital Marketing</span>
              <span className="menuItem">Music and Audio</span>
              <span className="menuItem">Programming and Tech</span>
              <span className="menuItem">Buisness and Lifestyle</span>
            </div>
          </>
        )}
         
        </div>
        :
      <div className={(active) ? "navbarLogoMaker activeLogoMaker" : "navbarLogoMaker"}>
        <div className="ContainerLogoMaker">
          <div className="Logo">
            <Link to="/Orders" className="link">
              <span className="text">fiverLogMaker</span>
              <span className="dot">.</span>
            </Link>
          </div>
          <div className="Links">
            <span>Fiver Buisness</span>
            <span>Explore</span>
            <span>Testimonials</span>
            {!currentUser?.id && <span>Tutorials</span>}
            {!currentUser?.id && <span>Pricing</span>}
            {!currentUser?.id == 1 && <button>Sign In</button>}

            {currentUser?.id == 1 && (
              <div
                className="Profile"
                onClick={() => {
                  optionsActive ? setUserOptions(false) : setUserOptions(true);
                }}
              >
                <img
                  src="https://imgs.search.brave.com/8ZH1FEnJukV2qqUonNh-bVJs0FhZ1S7GW9dZ0vH506c/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzE5MTgyNzY4L3Iv/aWwvNmE4ZTc5LzM3/MDEwNDE1MjgvaWxf/NjAweDYwMC4zNzAx/MDQxNTI4X21kNzcu/anBn"
                  className="profilePhoto"
                />
                <span className="profileName">Anu</span>
              </div>
            )}

          
          </div>
        </div>

         
        
         
      </div>}
    </>
  );
}

export default Navbar
