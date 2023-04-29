import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = import.meta.env.VITE_API_BASE_URL

export const authApiSlice = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}/api`,
  }),

  tagTypes: ["Post"],

  endpoints(builder) {
    return {
      postRegister: builder.mutation({
        query: (body) => ({
          url: "/auth/register",
          method: "POST",
          body: body,
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }),
        invalidatesTags: ["Post"],
      }),
      postLogin: builder.mutation({
        query: (body) => ({
          url: "/auth/login",
          method: "POST",
          body: body,
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }),
        invalidatesTags: ["Post"],
      }),
      postUpdatePassword: builder.mutation({
        query: (body) => ({
          url: "/auth/update-password",
          method: "PUT",
          body: body,
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }),
        invalidatesTags: ["Post"]
      }),
    };
  },
});

export const {
  usePostLoginMutation,
  usePostRegisterMutation,
  usePostUpdatePasswordMutation
} = authApiSlice;
