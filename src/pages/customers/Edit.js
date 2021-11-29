import { Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import axios from "axios";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import Toasty from "../../components/Toasty";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    margin: theme.spacing(3),
  },
}));

const Edit = () => {
  const classes = useStyles();
  const { id } = useParams();
  const [OpenToasty, setOpenToasty] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [form, setForm] = useState({
    name: {
      value: "",
      error: false,
    },
    job: {
      value: "",
      error: false,
    },
  });

  useEffect(() => {
    axios.get(`https://reqres.in/api/users/${id}`).then((response) => {
      const { data } = response.data;
      setForm({
        name: {
          value: data.first_name,
          error: false,
        },
        job: {
          value: data.job,
          error: false,
        },
      });
    });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: {
        value,
      },
    });
  };

  const handleRegisterButton = () => {
    setIsLoading(true);
    let hasError = false;
    let newFormState = {
      ...form,
    };
    if (!form.name.value) {
      hasError = true;
      newFormState.name = {
        value: form.name.value,
        error: true,
        helperText: "Digite o campo nome corretamente!",
      };
    }
    if (!form.job.value) {
      hasError = true;
      newFormState.job = {
        value: form.job.value,
        error: true,
        helperText: "Digite o campo cargo corretamente!",
      };
    }
    if (hasError) {
      return setForm(newFormState);
    }

    axios
      .put(`https://reqres.in/api/users/${id}`, {
        name: form.name.value,
        job: form.job.value,
      })
      .then((response) => {
        setOpenToasty(true);
        setIsLoading(false);
      });
  };

  return (
    <>
      <div className={classes.wrapper}>
        <TextField
          error={form.name.error}
          helperText={form.name.error ? form.name.helperText : ""}
          label='Digite o seu nome'
          name='name'
          value={form.name.value}
          onChange={handleInputChange}
        />
      </div>
      <div className={classes.wrapper}>
        <TextField
          error={form.job.error}
          helperText={form.job.error ? form.job.helperText : ""}
          label='Digite o seu cargo'
          name='job'
          value={form.job.value}
          onChange={handleInputChange}
        />
      </div>
      <div className={classes.wrapper}>
        <Button
          disabled={isLoading}
          variant='contained'
          color='primary'
          onClick={handleRegisterButton}
        >
          {isLoading ? "Aguarde..." : "Salvar Alterações"}
        </Button>
      </div>
      <Toasty
        onClose={() => setOpenToasty(false)}
        open={OpenToasty}
        severity='success'
        text='Registro Atualizado com Sucesso'
      />
    </>
  );
};

export default Edit;
