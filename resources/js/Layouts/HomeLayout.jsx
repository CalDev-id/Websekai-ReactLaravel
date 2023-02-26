import Browse from "@/Components/Browse";
import Sidebar from "@/Components/Sidebar";
import Topbar from "@/Components/Topbar";
import { useState } from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import Chat from "@/Components/Chat";

const HomeLayout = ({ children, home, pageName, auth }) => {
    const [sidebarOn, setSidebarOn] = useState(false);
    return (
        <>
            <section className="lg:flex bg-[#181A20] z-10">
                <div className="lg:w-[20%] 2xl:w-[15%]">
                    <Sidebar
                        auth={auth}
                        sidebarOn={sidebarOn}
                        setSidebarOn={setSidebarOn}
                        name={auth.user.name}
                    />
                </div>

                <section className="lg:w-[80%] lg:px-10 2xl:w-[85%]">
                    <Topbar
                        home={home}
                        pageName={pageName}
                        setSidebarOn={setSidebarOn}
                        name={auth.user.name}
                    />
                    <div className="xl:flex">
                        <div className="2xl:w-3/4 xl:w-full">
                            <main>{children}</main>
                        </div>

                        <div className="2xl:w-1/4 hidden 2xl:block pl-10 2xl:px-10">
                            <Chat />
                        </div>
                    </div>
                </section>
            </section>
        </>
    );
};

export default HomeLayout;
