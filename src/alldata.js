import React from "react";
import Usercontext from "./Context";
import {Table} from 'react-bootstrap';
import Navbarr from "./Navbar";

function AllData(){
  const ctx = React.useContext(Usercontext);
  const tableItems = ctx.users.map((item)=>
  <tr>
    <th>{item.username}</th>
    <th>{item.useremail}</th>
    <th>{item.userpassword}</th>
    <th>{item.userbalance}</th>
    </tr>   
);
  
  return (
    <>
    <Navbarr />
    <h5>All Data in Store</h5>
    <div>
      <Table>
        <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Password</th>
          <th>Balance</th>
        </tr>
        </thead>
        <tbody>
          {tableItems}
      </tbody>
      </Table>
      </div>
    </>
  );
}

export default AllData;

