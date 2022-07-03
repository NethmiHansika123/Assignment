import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
export const TodoApi = createApi({

    reducerPath: "TodoApi",
    baseQuery: fetchBaseQuery ({ baseUrl: "http://localhost:5000"}),
    endpoints: (builder) => ({
        getAllTodo: builder.query({
            query: () => "todo",
        })
    })
})

export const { useGetAllTodoQuery} = TodoApi