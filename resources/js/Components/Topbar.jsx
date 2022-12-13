import Index from "@/Pages/Index";
import { useRef, useState } from "react";
import { Link, Head } from "@inertiajs/inertia-react";

const Topbar = ({ setSidebarOn, home, pageName, name }) => {
    const [dropdownOpen, setDropdownOpen] = useState(true);
    const dropdownTarget = useRef();

    const triggerDropdown = () => {
        if (dropdownOpen) {
            dropdownTarget.current.classList.remove("hidden");
        } else {
            dropdownTarget.current.classList.add("hidden");
        }
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <>
            <div className="w-full">
                <div className="bg-transparent fixed py-5 lg:py-8 z-10 w-full lg:static">
                    <div className="flex justify-between mx-5 lg:mx-0">
                    {home ? (
                            <div className="flex lg:hidden">
                            <img
                                src="/images/logo.png"
                                alt=""
                                className="w-10 lg:hidden"
                                onClick={setSidebarOn.bind(null, true)}
                            />
                            <h1 className="self-center text-2xl font-bold text-white ml-3">{pageName}</h1>
                            </div>
                        ) : (
                            <div className="flex lg:hidden">
                            <Link href={route("index")} className="text-4xl text-white">
                                <i className="bx bx-left-arrow-alt"></i>
                            </Link>
                            <h1 className="self-center text-xl font-bold mb-2 text-white ml-3">{pageName}</h1>
                            </div>
                        )}

                        <input
                            type="text"
                            name="search"
                            id="search"
                            placeholder="Search movie, anime, genre"
                            className="rounded-full py-2 px-5 w-96  border-none hidden lg:block text-black bg-[#35383F] focus:outline-green-500"
                        />

                        <div className="flex self-center">
                            <span className="text-3xl text-white self-center mx-2 lg:hidden">
                                <i className="bx bx-search-alt-2"></i>
                            </span>

                            <p className="px-5 text-lg self-center font-semibold hidden lg:block">
                                Welcome, {name}
                            </p>
                            <img
                                onClick={triggerDropdown}
                                src="/images/websekai-logo.jpg"
                                alt=""
                                className="w-14 rounded-full hidden lg:block p-1 border-white border-2"
                            />
                        </div>
                    </div>
                    <div
                        ref={dropdownTarget}
                        className="bg-slate-600 hidden text-white rounded-xl float-right absolute z-10 right-10 mt-2"
                    >
                        <ul>
                            <li className="p-5 py-3">
                                <a href="#">Dashboard</a>
                            </li>
                            <li className="p-5 py-3">
                                <a href="#">Settings</a>
                            </li>
                            <Link href={route("logout")} method="post" as="button" className="p-5 py-3">
                                <p href="#">Sign out</p>
                            </Link >
                        </ul>
                    </div>
                </div>
            </div>
            <style jsx="true">
                {`
                    #search {
                        background-image: url("/images/search.png");
                        background-repeat: no-repeat;
                        background-position: right center;
                        background-position: 95% 50%;
                    }
                `}
            </style>
        </>
    );
};

export default Topbar;
