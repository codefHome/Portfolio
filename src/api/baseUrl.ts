import { fetchBaseQuery } from "@reduxjs/toolkit/query";

const baseQuery = fetchBaseQuery({
  // baseUrl: 'https://portfolio-api-b3ur.onrender.com',
  baseUrl: 'http://localhost:5000',
});

export default baseQuery
