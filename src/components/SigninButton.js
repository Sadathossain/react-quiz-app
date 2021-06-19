import React from 'react';
import { useHistory, useLocation } from "react-router-dom";
import { useAuth } from '../utils/auth';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const options = ['Signin As User', 'Signin As Admin', 'Signout'];

export default function SigninButton() {
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  let auth = useAuth();
  const [open, setOpen] = React.useState(false);
  const [openSnack, setOpenSnack] = React.useState(auth.user === 'user' && from.pathname === '/questions' ? true : false);
  const closeSnack = (event, reason) => {
    if (reason === 'clickaway') {return}
    setOpenSnack(false);
  };
  const [disabledIndex, setDisabledIndex] = React.useState(2);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(auth.user === 'admin' ? 2 : 1);
  React.useEffect(() => {
  if (auth.user === 'admin') {
    setDisabledIndex(1)
  } else if (auth.user === 'user') {
    setDisabledIndex(0)
  } else {
    setDisabledIndex(2)
  }
  }, [auth.user])

  const handleClick = () => {
    if ( selectedIndex === 0) {
        auth.unsetAdmin(() => {
            history.replace(from);
          });
    } else if (selectedIndex === 1) {
        auth.setAdmin(() => {
            history.replace(from);
          });
    } else {
        auth.signout(() => history.push("/"))
    }
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  return (
    <Grid container direction="column" alignItems="center">
      <Snackbar open={openSnack} autoHideDuration={4500} onClose={closeSnack}>
        <Alert onClose={closeSnack} severity="warning">
        You must be an Admin to view the page at {from.pathname}
        </Alert>
      </Snackbar>
      <Grid item xs={12}>
        <ButtonGroup variant="contained" color="secondary" ref={anchorRef} aria-label="siginin button">
          <Button onClick={handleClick}>{options[selectedIndex]}</Button>
          <Button
            color="secondary"
            size="large"
            aria-controls={open ? 'siginin-button-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-label="select user role"
            aria-haspopup="menu"
            onClick={handleToggle}
          >
            <ArrowDropDownIcon />
          </Button>
        </ButtonGroup>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList id="signin-button-menu">
                    {options.map((option, index) => (
                      <MenuItem
                        key={option}
                        disabled={index === disabledIndex}
                        selected={index === selectedIndex}
                        onClick={(event) => handleMenuItemClick(event, index)}
                      >
                        {option}
                      </MenuItem>
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </Grid>
    </Grid>
  );
}
