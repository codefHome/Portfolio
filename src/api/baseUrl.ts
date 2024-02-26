import { fetchBaseQuery } from "@reduxjs/toolkit/query";

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://portfolio-api-b3ur.onrender.com/',
});

export default baseQuery
