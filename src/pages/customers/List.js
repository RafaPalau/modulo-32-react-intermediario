import { Grid, makeStyles } from "@material-ui/core";
import axios from "axios";
import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import CustomerCard from "../../components/CustomerCard";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: {
    margin: theme.spacing(2),
  },
}));

const List = () => {
  const [customers, setCustomers] = useState([]);
  const history = useHistory();

  const classes = useStyles();

  useEffect(() => {
    axios("https://reqres.in/api/users").then((response) => {
      const { data } = response.data;

      setCustomers(data);
    });
  }, []);

  const handleRemoveCustomer = (id) => {
    axios.delete(`https://reqres.in/api/users/${id}`).then(() => {
      const newCustomersState = customers.filter(
        (customer) => customer.id !== id
      );
      setCustomers(newCustomersState);
    });
  };

  const handleEditCustomer = (id) => {
    history.push(`/customers/edit/${id}`);
  };

  return (
    <>
      <Grid container>
        {customers.map((item) => (
          <Grid item xs={12} md={4}>
            <CustomerCard
              id={item.id}
              name={item.first_name}
              lastname={item.last_name}
              email={item.email}
              avatar={item.avatar}
              className={classes.card}
              onRemoveCustomer={handleRemoveCustomer}
              onEditCustomer={handleEditCustomer}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default List;
