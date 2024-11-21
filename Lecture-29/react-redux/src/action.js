import * as actions from "./actionTypes";
import axios from "axios";

export const onInc = (val) => {
  return { type: INC, payload: val };
};

export const onDec = (val) => {
  return {
    type: actions.DEC,
    payload: val,
  };
};

//API Call
// action creator(onGetPosts)
export const onGetPosts = () => {
  return (dispatch) => {
    //API CALL
    try {
      axios.get("https://jsonplaceholder.typicode.com/posts/").then((res) => {
        console.log(res);

        // self-invoking function
        dispatch(
          ((data) => {
            return {
              type: actions.GET_POSTS,
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
                type: actions.CREATE_USER,
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
