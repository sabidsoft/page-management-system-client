import { useNavigate } from "react-router-dom";

export default function FacebookPageCard({ facebookPage }: any) {
    const navigate = useNavigate();

    const goToFacebookPage = () => {
        navigate(`/facebook-pages/${facebookPage?.pageId}`);
    };

    return (
        <div 
            onClick={goToFacebookPage} 
            className="flex items-center cursor-pointer rounded-lg px-4 py-4 shadow bg-[#fff] transform transition-transform duration-300 hover:scale-105"
        >
            <img
                src={facebookPage?.pageProfilePicture}
                alt="Profile_Picture"
                className="border rounded-lg"
            />
            <div className="ml-4">
                <h3 className="font-bold">{facebookPage?.pageName}</h3>
                <p className="text-[#888] text-xs">{facebookPage?.pageCategory}</p>
            </div>
        </div>
    );
}
