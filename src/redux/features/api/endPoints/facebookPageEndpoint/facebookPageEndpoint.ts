import { globalApi } from "../../globalApi";
import { FacebookPageLogin } from "./types";

export const facebookPageEndpoint = globalApi.injectEndpoints({
    endpoints: (builder) => ({
        facebookPageLogin: builder.mutation<any, FacebookPageLogin>({
            query: (data) => ({
                url: '/api/facebook-pages/facebook-page-login',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['FacebookPages'],
        }),

        getFacebookPages: builder.query<any, any>({
            query: () => ({
                url: `/api/facebook-pages`,
                method: "GET"
            }),
            keepUnusedDataFor: 0, // default 60 seconds
            providesTags: ['FacebookPages']
        }),

        getFacebookPage: builder.query<any, string>({
            query: (pageId) => ({
                url: `/api/facebook-pages/${pageId}`,
                method: 'GET'
            }),
            keepUnusedDataFor: 0,
            providesTags: (result, error, arg) => [{ type: 'FacebookPage', id: arg }]
        }),

        getFacebookPagePosts: builder.query<any, string>({
            query: (pageId) => ({
                url: `/api/facebook-pages/${pageId}/posts`,
                method: 'GET'
            }),
            keepUnusedDataFor: 0,
            providesTags: (result, error, arg) => [{ type: 'FacebookPagePosts', id: arg }]
        }),

        postToFacebookPages: builder.mutation<any, any>({
            query: (data) => ({
                url: '/api/facebook-pages/create-pages-post',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['FacebookPagePosts'],
        }),
    })
})

export const {
    useFacebookPageLoginMutation,
    useGetFacebookPagesQuery,
    useGetFacebookPageQuery,
    useGetFacebookPagePostsQuery,
    usePostToFacebookPagesMutation,
} = facebookPageEndpoint;
