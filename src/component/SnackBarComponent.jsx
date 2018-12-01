function SnackBarComponent(porps) {
  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      open={this.state.snackOpen}
      autoHideDuration={6000}
      onClose={this.handleSnackClose}
      ContentProps={{
        'aria-describedby': 'message-id',
      }}
      color="error"
      message={<span id="message-id">{this.state.snackMessage}</span>}
      action={[
        <IconButton key="close" aria-label="Close" color="inherit" onClick={this.handleSnackClose} >
          <CloseIcon />
        </IconButton>,
      ]}
    />
  )
}
export default SnackBarComponent;