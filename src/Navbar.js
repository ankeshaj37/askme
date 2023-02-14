
import React from 'react'
import'./Navbar.css'

const Navbar = () => {

  return (

    <>
       <div className='nav container-flued'>
       <div className='container'>
       <div className=" navbar sticky-top" >
          <div className="col-6">
            <div>
              <div className="container">
                <div className="row">
                  <div className="col-md-12 text-center">
                    <a  to='/'><img className='logoimages' src=''/><h3 className='names'>just search </h3></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" sudiv col-6">
      <div><img className='avtar' src='https://img.icons8.com/external-avatar-andi-nur-abdillah/256/external-avatar-avatarar-bussiness-avatar-andi-nur-abdillah-31.png'/></div>
          
            <div className=" tog navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
              <span className="navbar-toggler-icon"><img className='burgrr' src='https://img.icons8.com/ultraviolet/256/menu--v1.png'></img></span>
            </div>
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">iEveEra Search</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li data-bs-dismiss="offcanvas" className=" linkss nav-item">
                    <a className='linku' to='/'>Home</a>
                  </li>
                  <li data-bs-dismiss="offcanvas" className=" linkss nav-item">
                    <a className='linku' to='/profile'>Help</a>
                  </li>
                  <li data-bs-dismiss="offcanvas" className=" linkss nav-item">
                    <a className='linku' to='/CategoryHome'>Category</a>
                  </li>
              <li data-bs-dismiss="offcanvas" className=" linkss nav-item">
                    <a className='linku' to='/Dashboard'>Dashboard</a>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
       </div>
       </div>
     
    </>

  )
}

export default Navbar
