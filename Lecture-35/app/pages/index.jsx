//getServerSideProps()
// export default function Home({ users }) {
//   return (
//     <>
//       <h2>
//         {users.map((user) => (
//           <p>{user.name}</p>
//         ))}
//       </h2>
//     </>
//   );
// }

// // when this component will render, getServerSideProps is called first
// //this function will execute at server end
// export async function getServerSideProps() {
//   // console.log("getServerSideProps is called");
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await response.json();

//   // This props will be returned to above component as props
//   return {
//     props: {
//       users: data,
//     },
//   };
// }

//getStaticProps()
// export default function StaticComponent({ users }) {
//   return (
//     <>
//       <h2>
//         {users.map((user) => (
//           <p>{user.name}</p>
//         ))}
//       </h2>
//     </>
//   );
// }

// export async function getStaticProps() {
//   console.log("getstaticprops");
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await response.json();

//   return {
//     props: {
//       users: data,
//     },
//   };
// }

// //Incremnetal static generation
// import path from "path";
// import fsPromises from "fs/promises";


// export default function IncremnetalComponent({ recipes }) {
//   return (
//     <>
//       <h2>
//         {recipes.map((recipe) => (
//           <p>{recipe.strCategory}</p>
//         ))}
//       </h2>
//     </>
//   );
// }

// export async function getStaticProps() {
//   //reading json data(recipe) from file at server
//   // nodejs
//   const filePath = path.join(process.cwd(), "recipedata/recipes.json");
//   const data = await fsPromises.readFile(filePath);

//   const recipes = JSON.parse(data);

//   return {
//     props: {
//       recipes,
//     },
//     // revalidate: 30,

//     // whenever data is changes, then re-render should happen at server
//     // see pages/api/hello.js
//   };
// }

// client side fetching
// import React from "react";
// import { useEffect } from "react/cjs/react.production";

// const Home = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     setUsers(data);
//   }, []);

//   const userList = users.map((user) => {
//     return <p key={user.id}>{user.name}</p>;
//   });
//   return <div>{userList}</div>;
// };

// export default Home;

// client fetching with swr
// import React from "react";

// const Home = () => {
//   const fetcher = (url) => {
//     fetch(url).then((res) => res.json());
//   };

//   const { data } = useSWR("api", fetcher);

//   const userList = data.map((user) => {
//     return <p key={user.id}>{user.name}</p>;
//   });
//   return <div>{userList}</div>;
// };

// export default Home;
