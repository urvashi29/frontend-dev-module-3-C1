import React, { useState } from "react";

const useFetch = ({ url }) => {
  const [data, setData] = useState([]);

  const fetchData = () => {
    try {
      //api call
    } catch (err) {}
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  // const postRequest = () => {
  try {
    //api call
  } catch (err) {}
  // }

  return data;
};

export default useFetch;
