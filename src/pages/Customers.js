import axios from "axios";
import { useState, useEffect } from "react";
import CustomerCard from "../components/CustomerCard";

const Customers = () => {
  const [customers, setCustomers] = useState([]);

  console.log(customers);

  useEffect(() => {
    axios("https://reqres.in/api/users")
    .then((response) => {
      const { data } = response.data;

      setCustomers(data);
    });
  }, []);

  return(
    <>
      <h1>Customers</h1>
      {
        customers.map((item) => (
          <CustomerCard 
          name={item.first_name}
          lastname={item.last_name}
          email={item.email}
          avatar={item.avatar}
          />
        ))
      }
     
    </>
  )
};

export default Customers;
