import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Restaurante } from '../pages/Home'

type Produto = {
  id: number
  price: number
}

type PurchasePayload = {
  products: Produto[]
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement: string
    }
  }
  payment: {
    card: {
      owner: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurantes: builder.query<Restaurante[], void>({
      query: () => '/restaurantes'
    }),
    getRestaurante: builder.query<Restaurante, string>({
      query: (id) => `/restaurantes/${id}`
    }),
    purchase: builder.mutation<any, PurchasePayload>({
      query: (body) => ({
        url: '/checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const {
  useGetRestaurantesQuery,
  useGetRestauranteQuery,
  usePurchaseMutation
} = api

export default api
