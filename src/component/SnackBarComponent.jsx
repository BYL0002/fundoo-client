// import React, { Component } from 'react';

// import { IconButton, InputAdornment, Button, Snackbar, SnackbarContent } from '@material-ui/core';
// import CloseIcon from '@material-ui/icons/Close';
// import Visibility from '@material-ui/icons/Visibility';
// import VisibilityOff from '@material-ui/icons/VisibilityOff';
// import { loginService } from '../service/UserService';
// import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

// function SnackBarComponent(porps) {

//     function handleSnackClose() {

//     }
    
//     return (
//     <Snackbar
//       anchorOrigin={{
//         vertical: 'bottom',
//         horizontal: 'left',
//       }}
//       open={this.state.snackOpen}
//       autoHideDuration={6000}
//       onClose={this.handleSnackClose}
//       ContentProps={{
//         'aria-describedby': 'message-id',
//       }}
//       color="error"
//       message={<span id="message-id">{this.state.snackMessage}</span>}
//       action={[
//         <IconButton key="close" aria-label="Close" color="inherit" onClick={this.handleSnackClose} >
//           <CloseIcon />
//         </IconButton>,
//       ]}
//     />
//   )
// }
// export default SnackBarComponent;