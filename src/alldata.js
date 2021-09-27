import React from "react";
import Usercontext from "./Context";

function AllData(){
  const ctx = React.useContext(Usercontext);
  return (
    <>
    <h5>All Data in Store</h5>
    {JSON.stringify(ctx)}<br/>
    </>
  );
}

export default AllData;