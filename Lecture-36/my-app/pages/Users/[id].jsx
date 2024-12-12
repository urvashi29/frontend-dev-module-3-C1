// import React from "react";

// const User = ({ user }) => {
//   return <div>{user.phone}</div>;
// };

// export default User;

//get params at server side
// export async function getServerSideProps(context) {
//   console.log(context);

//   const { params } = context; //access rounting params

//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${params.id}`
//   );
//   const data = await response.json();

//   return {
//     props: {
//       user: data,
//     },
//   };
// }

// getting params in client side
import { useRouter } from "next/router";

const User = () => {
  const router = useRouter();
  console.log(router);
  console.log(router.query.id);

  //api call & get particular record

  return <div>user</div>;
};

export default User;
