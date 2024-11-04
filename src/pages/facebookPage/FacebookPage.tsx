import { useParams } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import { useGetFacebookPageQuery } from "../../redux/features/api/endPoints/facebookPageEndpoint/facebookPageEndpoint";
import Loader from "../../components/loader/Loader";
import ErrorMessage from "../../components/errorMessage/ErrorMessage";
import FacebookPagePosts from "../../components/facebookPagePosts/FacebookPagePosts";

export default function FacebookPage() {
    const { pageId } = useParams();
    const { data, isError, isLoading } = useGetFacebookPageQuery(pageId as string);

    const facebookPage = data?.data?.facebookPage;

    let content;

    if (isLoading)
        content = <Loader />;

    if (!isLoading && isError)
        content = <ErrorMessage message="Something went wrong." />;

    if (!isLoading && !isError && facebookPage)
        content = <FacebookPagePosts facebookPage={facebookPage} />

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <Sidebar activeMenu='' />

            {/* Main Content */}
            <main className="w-[75%] pb-6 px-16 overflow-y-auto">
                <h2 className='text-center text-3xl my-10 font-bold'>{facebookPage?.pageName}</h2>
                {content}
            </main>
        </div>
    );
}