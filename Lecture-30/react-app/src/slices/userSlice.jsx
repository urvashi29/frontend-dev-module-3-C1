import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// RTQ -> Redux Toolkit Query

export const userSlice = createApi({
  reducerPath: "users",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),

  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => ({
        url: "users",
        method: "GET",
      }),
    }),

    getUserById: builder.query({
      query: (id) => {
        return {
          url: `users/${id}`,
          method: "GET",
        };
      },
    }),
  }),
});

//export these endpoints like custom hook
// use+endpoints+
console.log(userSlice);
export const { useGetAllUsersQuery, useGetUserByIdQuery } = userSlice;
