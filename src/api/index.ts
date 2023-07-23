import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { UserInfo } from "models/UserInfo";
import { Params } from "models/api/Params";

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
    endpoints: build => ({
        getInstitutes: build.query<UserInfo[], Params>({
            query: params => `/api`, //?page=${params.page}&size=${params.size}`,
        }),
    }),
});

export const { useGetInstitutesQuery } = api;
