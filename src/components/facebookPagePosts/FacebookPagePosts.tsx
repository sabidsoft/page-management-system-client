import { useGetFacebookPagePostsQuery } from "../../redux/features/api/endPoints/facebookPageEndpoint/facebookPageEndpoint";
import FacebookPagePostCard from "../cards/facebookPagePostCard/FacebookPagePostCard";
import ErrorMessage from "../errorMessage/ErrorMessage";
import Loader from "../loader/Loader";

export default function FacebookPagePosts({ facebookPage }: any) {
    const { data: postsData, isError: isPostsError, isLoading: postsIsLoading } = useGetFacebookPagePostsQuery(facebookPage?.pageId as string);

    const posts = postsData?.data?.posts;
    // const paging = postsData?.data?.paging;

    console.log(posts)

    if (postsIsLoading) return <Loader />;

    if (!postsIsLoading && isPostsError)
        return <ErrorMessage message="Something went wrong." />;

    if (!postsIsLoading && !isPostsError && posts && posts.length === 0)
        return <ErrorMessage message='Opps! Sorry! There is no post available!' />;

    return (
        <div className="flex flex-col items-center">
            {posts && posts.map((post: any) => <FacebookPagePostCard key={post._id} post={post} facebookPage={facebookPage} />)}
        </div>
    )
}