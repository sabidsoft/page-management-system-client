import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from '../../redux/app/hooks';
import { adminLoggedOut } from '../../redux/features/auth/authSlice';
import { SidebarProps } from './types';

export default function Sidebar({ activeMenu }: SidebarProps) {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    // Navigate to different pages
    const handleNavigation = (menu: string) => {
        if (menu === 'All Pages') {
            navigate('/');
        }
        
        else if (menu === 'Barishal Division') {
            navigate('/barishal-division');
        }

        else if (menu === 'Chattogram Division') {
            navigate('/chattogram-division');
        }

        else if (menu === 'Dhaka Division') {
            navigate('/dhaka-division');
        }

        else if (menu === 'Khulna Division') {
            navigate('/khulna-division');
        }

        else if (menu === 'Mymensingh Division') {
            navigate('/mymensingh-division');
        }

        else if (menu === 'Rajshahi Division') {
            navigate('/rajshahi-division');
        }

        else if (menu === 'Rangpur Division') {
            navigate('/rangpur-division');
        }

        else if (menu === 'Sylhet Division') {
            navigate('/sylhet-division');
        }

        else if (menu === 'Create Pages Post') {
            navigate('/create-pages-post');
        }
        
        else if (menu === 'Add Facebook Page') {
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
            <div className="text-center py-5 border-b border-gray-200 mb-4">
                <Link to="/" className="text-2xl font-bold text-gray-800 ">
                    Page Management System
                </Link>
            </div>

            <div className="flex-grow overflow-y-auto px-5"> {/* Sidebar scrollable */}
                <ul>
                    <li
                        className={`cursor-pointer font-medium py-2 px-4 mb-4 rounded ${activeMenu === 'All Pages' ? 'bg-gray-300' : 'hover:bg-gray-200 transition-colors duration-300'}`}
                        onClick={() => handleNavigation('All Pages')}
                    >
                        All Pages
                    </li>

                    <li
                        className={`cursor-pointer font-medium py-2 px-4 mb-4 rounded ${activeMenu === 'Barishal Division' ? 'bg-gray-300' : 'hover:bg-gray-200 transition-colors duration-300'}`}
                        onClick={() => handleNavigation('Barishal Division')}
                    >
                        Barishal Division
                    </li>

                    <li
                        className={`cursor-pointer font-medium py-2 px-4 mb-4 rounded ${activeMenu === 'Chattogram Division' ? 'bg-gray-300' : 'hover:bg-gray-200 transition-colors duration-300'}`}
                        onClick={() => handleNavigation('Chattogram Division')}
                    >
                        Chattogram Division
                    </li>

                    <li
                        className={`cursor-pointer font-medium py-2 px-4 mb-4 rounded ${activeMenu === 'Dhaka Division' ? 'bg-gray-300' : 'hover:bg-gray-200 transition-colors duration-300'}`}
                        onClick={() => handleNavigation('Dhaka Division')}
                    >
                        Dhaka Division
                    </li>

                    <li
                        className={`cursor-pointer font-medium py-2 px-4 mb-4 rounded ${activeMenu === 'Khulna Division' ? 'bg-gray-300' : 'hover:bg-gray-200 transition-colors duration-300'}`}
                        onClick={() => handleNavigation('Khulna Division')}
                    >
                        Khulna Division
                    </li>

                    <li
                        className={`cursor-pointer font-medium py-2 px-4 mb-4 rounded ${activeMenu === 'Mymensingh Division' ? 'bg-gray-300' : 'hover:bg-gray-200 transition-colors duration-300'}`}
                        onClick={() => handleNavigation('Mymensingh Division')}
                    >
                        Mymensingh Division
                    </li>

                    <li
                        className={`cursor-pointer font-medium py-2 px-4 mb-4 rounded ${activeMenu === 'Rajshahi Division' ? 'bg-gray-300' : 'hover:bg-gray-200 transition-colors duration-300'}`}
                        onClick={() => handleNavigation('Rajshahi Division')}
                    >
                        Rajshahi Division
                    </li>

                    <li
                        className={`cursor-pointer font-medium py-2 px-4 mb-4 rounded ${activeMenu === 'Rangpur Division' ? 'bg-gray-300' : 'hover:bg-gray-200 transition-colors duration-300'}`}
                        onClick={() => handleNavigation('Rangpur Division')}
                    >
                        Rangpur Division
                    </li>

                    <li
                        className={`cursor-pointer font-medium py-2 px-4 mb-4 rounded ${activeMenu === 'Sylhet Division' ? 'bg-gray-300' : 'hover:bg-gray-200 transition-colors duration-300'}`}
                        onClick={() => handleNavigation('Sylhet Division')}
                    >
                        Sylhet Division
                    </li>

                    <li
                        className={`cursor-pointer font-medium py-2 px-4 mb-4 rounded ${activeMenu === 'Create Pages Post' ? 'bg-gray-300' : 'hover:bg-gray-200 transition-colors duration-300'}`}
                        onClick={() => handleNavigation('Create Pages Post')}
                    >
                        Create Pages Post
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
