import React, { useState } from 'react'
import { MDBFooter } from 'mdb-react-ui-kit';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBBtn,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBCollapse,
  } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
function Footer() {
        const [openBasic, setOpenBasic] = useState(false);
    
  return (
    <div>
          <MDBNavbar expand='lg' light bgColor='light'>
              <MDBContainer fluid>
                <MDBNavbarBrand href='#'>
                    <img style={{marginLeft:'170px'}}
                      src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRplrgOOM66GpUCL8MmCr5OahXS-a6u5IIJ_ZRjsc5QgbjH1j0TOVlyN_-vu7B1Optb4aM&usqp=CAU'
                      height='150'
                      alt=''
                      loading='lazy'
                    />
                </MDBNavbarBrand>
        
                <MDBNavbarToggler
                  aria-controls='navbarSupportedContent'
                  aria-expanded='false'
                  aria-label='Toggle navigation'
                  onClick={() => setOpenBasic(!openBasic)}
                >
                  <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>
        
                <MDBCollapse navbar open={openBasic}>
                  <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
                    <MDBNavbarItem>
                      <MDBNavbarLink active aria-current='page' href='#'>
                        <Link to={'./'}>
                        Home
                        </Link>
                      </MDBNavbarLink>
                    </MDBNavbarItem>

                    <MDBNavbarItem>
                    <MDBNavbarLink active aria-current='page' href='#'>
                        <Link to={'./about'}>
                        About
                        </Link>
                        </MDBNavbarLink>
                    
                    </MDBNavbarItem>
        
                    <MDBNavbarItem>
                      <MDBNavbarLink active aria-current='page' href='#'>
                      <Link to={'./services'}>
                      Services
                        </Link>
                      </MDBNavbarLink>
                    </MDBNavbarItem>
        
                    <MDBNavbarItem>
                      <MDBDropdown>
                        <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                        <Link to={'./projects'}>
                        Projects
                        </Link>
                        </MDBDropdownToggle>
                        <MDBDropdownMenu>
                          <MDBDropdownItem link>Ongoing</MDBDropdownItem>
                          <MDBDropdownItem link>Completed</MDBDropdownItem>
                        </MDBDropdownMenu>
                      </MDBDropdown>
                    </MDBNavbarItem>
        
                    <MDBNavbarItem>
                      <MDBNavbarLink active aria-current='page' href='#'>
                      <Link to={'./career'}>
                      Career
                        </Link>
                      </MDBNavbarLink>
                    </MDBNavbarItem>
        
                    <MDBNavbarItem>
                      <MDBNavbarLink active aria-current='page' href='#'>
                      <Link to={'./contact'}>
                      Contact
                      </Link>
                      </MDBNavbarLink>
                    </MDBNavbarItem>
                   
                  </MDBNavbarNav>
                </MDBCollapse>
              </MDBContainer>
            </MDBNavbar>

            <MDBFooter bgColor='light' className='text-center text-lg-left'>
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} {' '}
        <a className='text-dark' href='https://mdbootstrap.com/'>
         All right reserved. Privacy Policy Web Design by Hatchberries.
        </a>
      </div>
    </MDBFooter>
    </div>
  )
}

export default Footer