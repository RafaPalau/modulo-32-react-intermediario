import {
  Avatar,
  Card,
  CardActions,
  CardHeader,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import classNames from "classnames";
import ModalConfirm from "./ModalConfirm";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  avatar: {},
}));

const CustomerCard = ({
  id,
  name,
  lastname,
  email,
  avatar,
  className,
  onRemoveCustomer,
}) => {
  const classes = useStyles();
  const [openModal, setOpenModal] = useState(false);

  const handleToogleOpenModal = () => {
    setOpenModal(!openModal);
  };

  const handleConfirmModal = (id) => {
    onRemoveCustomer(id);
    handleToogleOpenModal();
  };

  const handleRemoveCustomer = () => {
    handleToogleOpenModal();
  };
  return (
    <>
      <Card className={classNames(className, classes.root)}>
        <CardHeader
          avatar={
            <Avatar className={classes.avatar} aria-label='recipe' src={avatar}>
              R
            </Avatar>
          }
          title={`${name} ${lastname}`}
          subheader={email}
        />

        <CardActions disableSpacing>
          <IconButton aria-label='Editar cadastro'>
            <EditIcon />
          </IconButton>
          <IconButton
            aria-label='Remover cadastro'
            onClick={() => handleRemoveCustomer()}
          >
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </Card>
      <ModalConfirm
        open={openModal}
        onConfirm={() => handleConfirmModal(id)}
        onClose={() => handleToogleOpenModal()}
        title='Deseja realmente excluir este cadastro?'
        message='Ao confirmar não será possível reverter esta operação!'
      />
    </>
  );
};
export default CustomerCard;
