import { createApi } from '@reduxjs/toolkit/query/react'
import baseQuery from './baseUrl'



export const landingPageAPI = createApi({

  reducerPath: 'landingPageAPI',
  tagTypes: ['landing'],
  baseQuery,
  endpoints: (builder) => ({
    getExperience: builder.query({
      query: () => "getAllExperience"
    }),
   

})
})

export const {
    useGetExperienceQuery,
} = landingPageAPI