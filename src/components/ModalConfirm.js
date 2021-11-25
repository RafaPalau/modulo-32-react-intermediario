import * as React from "react";

import {
  DialogTitle,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Button
} from "@material-ui/core";

const ModalConfirm = ({ open, onClose, onConfirm, title, message }) => {
  return (
    <>
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            {message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancelar</Button>
          <Button onClick={onConfirm} autoFocus>
            Aceitar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
export default ModalConfirm;
