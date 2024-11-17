import Sidebar from "../../components/sidebar/Sidebar";

export default function MymensinghDivision() {
    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <Sidebar activeMenu='Mymensingh Division' />

            {/* Main Content */}
            <main className="w-[75%] px-5 overflow-y-auto">
                <h2 className='text-center text-3xl my-10 font-bold'>Pages of Mymensingh Division</h2>
                <p className="text-xl font-semibold">Under Development</p>
            </main>
        </div>
    );
}
