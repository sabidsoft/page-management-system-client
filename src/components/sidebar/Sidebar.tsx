import { useNavigate } from "react-router-dom";
import { useAppDispatch } from '../../redux/app/hooks';
import { adminLoggedOut } from '../../redux/features/auth/authSlice';
import { SidebarProps } from './types';

export default function Sidebar({ activeMenu }: SidebarProps) {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    // Navigate to different pages
    const handleNavigation = (menu: string) => {
        if (menu === 'Pages') {
            navigate('/');
        } else if (menu === 'Create Post') {
            navigate('/create-post');
        } else if (menu === 'Add Facebook Page') {
            navigate('/add-facebook-page');
        }
    };

    // Handle Logout
    const handleLogout = () => {
        dispatch(adminLoggedOut());
        localStorage.clear();
        navigate('/');
    };

    return (
        <nav className="h-full w-[25%] bg-[#fff] flex flex-col border-r">
            <h1 className="text-2xl font-bold text-center text-gray-800 py-5 border-b border-gray-200 mb-4">Page Management System</h1>
            <div className="flex-grow overflow-y-auto px-5"> {/* Sidebar scrollable */}
                <ul>
                    <li
                        className={`cursor-pointer font-medium py-2 px-4 mb-4 rounded ${activeMenu === 'Pages' ? 'bg-gray-300' : 'hover:bg-gray-200 transition-colors duration-300'}`}
                        onClick={() => handleNavigation('Pages')}
                    >
                        Pages
                    </li>
                    <li
                        className={`cursor-pointer font-medium py-2 px-4 mb-4 rounded ${activeMenu === 'Create Post' ? 'bg-gray-300' : 'hover:bg-gray-200 transition-colors duration-300'}`}
                        onClick={() => handleNavigation('Create Post')}
                    >
                        Create Post
                    </li>
                    <li
                        className={`cursor-pointer font-medium py-2 px-4 rounded ${activeMenu === 'Add Facebook Page' ? 'bg-gray-300' : 'hover:bg-gray-200 transition-colors duration-300'}`}
                        onClick={() => handleNavigation('Add Facebook Page')}
                    >
                        Add Facebook Page
                    </li>
                </ul>
            </div>
            <div className="border-t border-gray-200 px-4 py-4">
                <button
                    className="bg-gray-200 font-medium py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors duration-300 ease-in-out"
                    onClick={handleLogout}
                >
                    Logout
                </button>
            </div>
        </nav>
    );
};
