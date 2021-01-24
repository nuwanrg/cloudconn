/** @format */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CloudIcon from "@material-ui/icons/Cloud";
import Link from "@material-ui/core/Link";
import MenuItem from "@material-ui/core/MenuItem";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuList from "@material-ui/core/MenuList";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    padding: 10,
  },

  paper: {
    marginRight: theme.spacing(2),
  },
}));

const HeaderComponent = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }
    prevOpen.current = open;
  }, [open]);

  return (
    <AppBar position='fixed' style={{ background: "#333" }}>
      <Toolbar>
        <CloudIcon></CloudIcon>
        <Typography variant='h5' color='inherit' className={classes.title}>
          <Link href='/' color='inherit'>
            CloudConn
          </Link>
        </Typography>
        <Button color='inherit' href='/#home'>
          Home
        </Button>
        <Button color='inherit' href='/#about'>
          About
        </Button>
        <Button
          color='inherit'
          href='/#services'
          ref={anchorRef}
          aria-controls={open ? "menu-list-grow" : undefined}
          aria-haspopup='true'
          //onClick={handleToggle}
          onMouseOver={handleToggle}
          endIcon={<ArrowDropDownIcon />}>
          Services
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}>
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id='menu-list-grow'
                    onKeyDown={handleListKeyDown}>
                    <MenuItem onClick={handleClose}>
                      <Button href='/applicationDev'>
                        Application developments
                      </Button>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <Button href='/ifsservices'>IFS Services</Button>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <Button href='/wso2Support'>WSO2 Support</Button>
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>

        <Button color='inherit' href='/#career'>
          Career
        </Button>
        <Button color='inherit' href='/#contact'>
          Contact
        </Button>
      </Toolbar>
    </AppBar>
  );
};
export default HeaderComponent;
// import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";
// import NavDropdown from "react-bootstrap/NavDropdown";
//import React from 'react';
// <Navbar
//   fixed='top'
//   collapseOnSelect
//   expand='lg'
//   // bg='dark'
//   variant='dark'
//   className='header-box-1'>
//   <div className='container'>
//     <Navbar.Brand href='#home'>
//       <img
//         alt=''
//         src='img/the-cloud.jpg'
//         width='30'
//         height='30'
//         className='d-inline-block align-top'
//       />
//       CloudConn
//     </Navbar.Brand>
//     <Navbar.Toggle aria-controls='responsive-navbar-nav' />
//     <Navbar.Collapse id='responsive-navbar-nav'>
//       <Nav className='mr-auto'></Nav>
//       <Nav>
//         <Nav.Link href='/'>Home</Nav.Link>
//         <Nav.Link href='/#about'>About</Nav.Link>
//         <NavDropdown title='Services' id='basic-nav-dropdown'>
//           <NavDropdown.Item href='/ifsservices'>
//             IFS Services
//           </NavDropdown.Item>
//           <br></br>
//           <NavDropdown.Item href='#action/3.2'>
//             Another action
//           </NavDropdown.Item>
//         </NavDropdown>
//         {/* <Nav.Link href='/#services'>Services</Nav.Link> */}
//         <Nav.Link href='/#career'> Career</Nav.Link>
//         <Nav.Link href='/#contact'> Contact</Nav.Link>
//       </Nav>
//     </Navbar.Collapse>
//   </div>
// </Navbar>

// <div>
//   <div id='sticker' className='header-area stick' style={{}}>
//     <div className='container'>
//       <div className='row'>
//         <div className='col-md-12 col-sm-12'>
//           {/* Navigation */}
//           <nav className='navbar navbar-default'>
//             {/* Brand and toggle get grouped for better mobile display */}
//             <div className='navbar-header'>
//               <button
//                 type='button'
//                 className='navbar-toggle collapsed'
//                 data-toggle='collapse'
//                 data-target='.bs-example-navbar-collapse-1'
//                 aria-expanded='true'>
//                 <span className='sr-only'>Toggle navigation</span>
//                 <span className='icon-bar' />
//                 <span className='icon-bar' />
//                 <span className='icon-bar' />
//               </button>
//               {/* Brand */}
//               <a
//                 className='navbar-brand page-scroll sticky-logo'
//                 href='/home'>
//                 <h1>
//                   <span />
//                   CloudConn
//                 </h1>
//                 {/* Uncomment below if you prefer to use an image logo */}
//                 {/* <img src="img/logo.png" alt="" title=""> */}
//               </a>
//             </div>
//             {/* Collect the nav links, forms, and other content for toggling */}
//             <div
//               className='collapse navbar-collapse main-menu bs-example-navbar-collapse-1'
//               id='navbar-example'>
//               <ul className='nav navbar-nav navbar-right'>
//                 s{" "}
//                 <li className='nav-item'>
//                   <Link to={"/home"} className='nav-link'>
//                     Home
//                   </Link>
//                 </li>
//                 <li>
//                   <a className='page-scroll' href='#about'>
//                     About
//                   </a>
//                 </li>
//                 <li className='nav'>
//                   <a>
//                     <NavDropdown title='Services' id='basic-nav-dropdown'>
//                       <NavDropdown.Item href='/ifsservices'>
//                         IFS Services
//                       </NavDropdown.Item>
//                       <br></br>
//                       <NavDropdown.Item href='#action/3.2'>
//                         Another action
//                       </NavDropdown.Item>
//                     </NavDropdown>
//                   </a>
//                   {/*                         <a className='dropdown'>
//                     <button
//                       className='navbar-inverse dropdown'
//                       type='button'
//                       id='dropdownMenu1'
//                       data-toggle='dropdown'
//                       aria-haspopup='false'
//                       aria-expanded='true'>
//                       Services
//                       <span />
//                     </button>
//                     <ul className='dropdown-menu'>
//                       <li>
//                         <Link to={"/ifsservices"} className='nav-link'>
//                           IFS Services
//                         </Link>
//                       </li>
//                       <li>
//                         <a href='#'>Another action</a>
//                       </li></ul> </a> */}
//                 </li>
//                 <li>
//                   <a className='page-scroll' href='#services'>
//                     Services
//                   </a>
//                 </li>
//                 <li>
//                   <a className='page-scroll' href='#career'>
//                     Career
//                   </a>
//                 </li>
//                 {/*
//           <li>
//             <a class="page-scroll" href="#team">Team</a>
//           </li>
//           <li>
//             <a class="page-scroll" href="#portfolio">Portfolio</a>
//           </li>

//           <li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown">Drop Down<span class="caret"></span></a>
//             <ul class="dropdown-menu" role="menu">
//               <li><a href=# >Drop Down 1</a></li>
//               <li><a href=# >Drop Down 2</a></li>
//             </ul>
//           </li>

//           <li>
//             <a class="page-scroll" href="#blog">Blog</a>
//           </li>*/}
//                 <li>
//                   <a className='page-scroll' href='#contact'>
//                     Contact
//                   </a>
//                 </li>
//               </ul>
//             </div>
//             {/* navbar-collapse */}
//           </nav>
//           {/* END: Navigation */}
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
