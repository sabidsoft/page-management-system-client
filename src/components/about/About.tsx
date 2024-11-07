export default function About({ facebookPage }: any) {
    if (!facebookPage) return null;

    return (
        <div className="flex justify-center">
            <div className="bg-[#fff] w-[700px] p-6 rounded-lg shadow">
                <h3 className="text-2xl font-semibold mb-4">About {facebookPage.pageName}</h3>

                {/* Page Description */}
                <p className="mb-4 text-gray-700">{facebookPage.description || "No description available."}</p>

                {/* Page Category */}
                {facebookPage.category && (
                    <p className="text-gray-600 mb-2">
                        <span className="font-semibold">Category: </span>{facebookPage.category}
                    </p>
                )}

                {/* Page Followers */}
                {facebookPage.followersCount && (
                    <p className="text-gray-600 mb-2">
                        <span className="font-semibold">Followers: </span>{facebookPage.followersCount.toLocaleString()}
                    </p>
                )}

                {/* Page Created Date */}
                {facebookPage.createdDate && (
                    <p className="text-gray-600 mb-2">
                        <span className="font-semibold">Created On: </span>{new Date(facebookPage.createdDate).toLocaleDateString()}
                    </p>
                )}
            </div>
        </div>
    );
}
