import AlbumIcon from '@mui/icons-material/Album';
import { IconButton, Menu, MenuItem, styled } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Register from '../../../../features/Auth/components/register';
import { AccountCircle, Close } from '@mui/icons-material';
import Login from '../../../../features/Auth/components/login';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../../features/Auth/userSlice';

const MyLink = styled(Link)({
  textDecoration: 'none',
  color: 'white',
});

const MODE = {
  LOGIN: 'login',
  REGISTER: 'register',
};

export default function Header() {
  const loggedInUser = useSelector((state) => state.user.current);
  const isLoggedIn = !!loggedInUser.id;
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState(MODE.LOGIN);
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUserClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    const action = logout();
    dispatch(action);
    handleCloseMenu();
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}> */}
          <AlbumIcon sx={{ mr: 4 }} />
          {/* </IconButton> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <MyLink to="/">FOXY EDWARD</MyLink>
          </Typography>

          <MyLink to="/todos">
            <Button color="inherit">TodoPage</Button>
          </MyLink>

          <MyLink to="/albums">
            <Button color="inherit">AlbumPage</Button>
          </MyLink>

          <MyLink to="/form-register">
            <Button color="inherit">Form</Button>
          </MyLink>

          <MyLink to="/counter">
            <Button color="inherit">Counter</Button>
          </MyLink>

          {!isLoggedIn && (
            <Button color="inherit" onClick={handleClickOpen}>
              Log In
            </Button>
          )}

          {isLoggedIn && (
            <IconButton color="inherit" onClick={handleUserClick}>
              <AccountCircle />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      <Menu
        // id="basic-menu"
        anchorEl={anchorEl}
        open={!!anchorEl}
        onClose={handleCloseMenu}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleCloseMenu}>My account</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>

      <Dialog
        open={open}
        onClose={(event, reason) => {
          if (reason === 'backdropClick') {
            return;
          }
          handleClose();
        }}
        disableEscapeKeyDown
      >
        <IconButton sx={{ position: 'absolute', top: 2, right: 0, zIndex: 1 }} onClick={handleClose}>
          <Close sx={{ color: 'grey' }} />
        </IconButton>
        <DialogContent
          sx={{
            width: {
              xs: '90%', // 90% chiều ngang màn hình trên mobile
              sm: '80%', // 80% chiều ngang màn hình trên tablet
              md: '500px', // 500px cố định trên desktop
            },
            minHeight: '400px', // Đảm bảo chiều cao tối thiểu
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            mx: 'auto', // Canh giữa theo chiều ngang
          }}
        >
          {mode === MODE.REGISTER && (
            <>
              <Register closeDialog={handleClose} />

              <Box textAlign="center">
                <Button color="primary" onClick={() => setMode(MODE.LOGIN)}>
                  Already have an account. Login now
                </Button>
              </Box>
            </>
          )}

          {mode === MODE.LOGIN && (
            <>
              <Login closeDialog={handleClose} />

              <Box textAlign="center">
                <Button color="primary" onClick={() => setMode(MODE.REGISTER)}>
                  Fon't have an account. Register now
                </Button>
              </Box>
            </>
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
}
