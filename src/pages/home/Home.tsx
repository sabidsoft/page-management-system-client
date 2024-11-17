import useTitle from '../../hooks/useTitle';
import Sidebar from '../../components/sidebar/Sidebar';
import { useGetFacebookPagesQuery } from '../../redux/features/api/endPoints/facebookPageEndpoint/facebookPageEndpoint';
import Loader from '../../components/loader/Loader';
import ErrorMessage from '../../components/errorMessage/ErrorMessage';
import PageCard from '../../components/cards/pageCard/PageCard';

export default function Home() {
    useTitle('Home');
    const { data, isError, isLoading } = useGetFacebookPagesQuery('');

    const facebookPages = data?.data.facebookPages;

    let content;

    if (isLoading)
        content = <Loader />;

    if (!isLoading && isError)
        content = <ErrorMessage message="Something went wrong." />;

    if (!isLoading && !isError && facebookPages && facebookPages.length === 0)
        content = <ErrorMessage message='Opps! Sorry! There is no Facebook page available!' />;

    if (!isLoading && !isError && facebookPages && facebookPages.length > 0)
        content =
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-5 rounded-xl">
                {facebookPages && facebookPages.map((facebookPage: any) => <PageCard key={facebookPage._id} facebookPage={facebookPage} />)}
            </div>

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <Sidebar activeMenu='All Pages' />

            {/* Main Content */}
            <main className="w-[75%] px-5 overflow-y-auto">
                <h2 className='text-center text-3xl my-10 font-bold'>All Pages</h2>
                {content}
            </main>
        </div>
    );
}
