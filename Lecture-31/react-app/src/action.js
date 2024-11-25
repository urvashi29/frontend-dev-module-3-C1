import * as actions from "./actionTypes";
import axios from "axios";

// import result = useFetch("");

export const onGetUsers = () => {
  return (dispatch) => {
    try {
      axios.get("https://jsonplaceholder.typicode.com/users/").then((res) => {
        dispatch(
          ((data) => {
            return {
              type: actions.GET_USERS,
              payload: {
                httpResponse: data.slice(0, 10),
              },
            };
          })(res.data)
        );
      });
    } catch (err) {
      console.log(err);
    }
  };
};

//API Call
// action creator(onGetPosts)
// export const onGetPosts = () => {
//   return (dispatch) => {
//     //API CALL
//     try {
//       axios.get("https://jsonplaceholder.typicode.com/posts/").then((res) => {
//         console.log(res);

//         // self-invoking function
//         dispatch(
//           ((data) => {
//             return {
//               type: actions.GET_POSTS,
//               payload: {
//                 httpResponse: data.slice(0, 10),
//               },
//             };
//           })(res.data)
//         );
//       });
//     } catch (err) {
//       console.log(err);
//     }
//   };
// };

// const getData = () => {
//   return () => {
//     // api call
//     dispatch((() => {
//       return {
//         type: "", payload: {}
//       }
//     })(response))
//   }
// }

export const createUser = (name) => {
  return (dispatch) => {
    try {
      axios
        .post("https://api.restful-api.dev/objects", {
          name: name,
          data: {
            year: 2019,
            price: 1849.99,
            "CPU model": "Intel Core i9",
            "Hard disk size": "1 TB",
          },
        })
        .then((res) => {
          dispatch(
            ((data) => {
              return {
                type: actions.CREATE_EMPLOYEE,
                payload: {
                  httpResponse: data,
                },
              };
            })(res.data)
          );
        });
    } catch (err) {
      console.log(err);
    }
  };
};

export const deleteUser = (id) => {
  return {
    type: actions.DELETE_EMPLOYEE,
    payload: id,
  };
};
