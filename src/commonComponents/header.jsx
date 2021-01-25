/** @format */
import React from "react";
import { fade, makeStyles, withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CloudIcon from "@material-ui/icons/Cloud";
import Link from "@material-ui/core/Link";
import MenuItem from "@material-ui/core/MenuItem";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MoreIcon from "@material-ui/icons/MoreVert";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 0.75,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },

  title: {
    flexGrow: 1,
    padding: 10,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

const HeaderComponent = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const anchorRef = React.useRef(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseDropDown = () => {
    setAnchorEl(null);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }
    prevOpen.current = open;
  }, [open]);

  const renderMenu = (
    <StyledMenu
      id='customized-menu'
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleCloseDropDown}>
      <StyledMenuItem>
        <Button href='/applicationDev'>Application developments</Button>
      </StyledMenuItem>
      <StyledMenuItem>
        <Button href='/ifsservices'>IFS Services</Button>
      </StyledMenuItem>
      <StyledMenuItem>
        <Button href='/wso2Support'>WSO2 Support</Button>
      </StyledMenuItem>
    </StyledMenu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}>
      <MenuItem>
        <Button color='inherit' href='/#home'>
          Home
        </Button>
      </MenuItem>
      <MenuItem>
        <Button color='inherit' href='/#about'>
          About
        </Button>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <Button
          color='inherit'
          href='/#services'
          ref={anchorRef}
          aria-controls={open ? "primary-search-account-menu" : undefined}
          aria-haspopup='true'
          onMouseOver={handleToggle}
          endIcon={<ArrowLeftIcon />}>
          Services
        </Button>
      </MenuItem>
      <MenuItem>
        <Button color='inherit' href='/#career'>
          Career
        </Button>
      </MenuItem>
      <MenuItem>
        <Button color='inherit' href='/#contact'>
          Contact
        </Button>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position='fixed' style={{ background: "#333" }}>
        <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
          <div className='container'>
            <Toolbar>
              <CloudIcon />
              <Typography
                variant='h4'
                color='inherit'
                className={classes.title}>
                <Link href='/' color='inherit'>
                  CloudConn
                </Link>
              </Typography>
              <div className={classes.grow} />
              <div className={classes.sectionDesktop}>
                <Button color='inherit' href='/#home'>
                  Home
                </Button>
                <Button color='inherit' href='/#about'>
                  About
                </Button>
                <Button
                  aria-controls='customized-menu'
                  aria-haspopup='true'
                  color='inherit'
                  href='/#services'
                  onMouseOver={handleClick}
                  endIcon={<ArrowDropDownIcon />}>
                  Services
                </Button>

                <Button color='inherit' href='/#career'>
                  Career
                </Button>
                <Button color='inherit' href='/#contact'>
                  Contact
                </Button>
              </div>
              <div className={classes.sectionMobile}>
                <IconButton
                  aria-label='show more'
                  aria-controls={mobileMenuId}
                  aria-haspopup='true'
                  onClick={handleMobileMenuOpen}
                  color='inherit'>
                  <MoreIcon />
                </IconButton>
              </div>
            </Toolbar>
          </div>
        </div>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
};
export default HeaderComponent;
