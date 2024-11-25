import React from "react";
import {useSelector} from 'react-redux';
import  PieChart  from "../../components/PieChart";

const index = () => {
  const data = useSelector((state) => state.data);

  return (
    <>
      <PieChart data={data} />
    </>
  );
};

export default index;
