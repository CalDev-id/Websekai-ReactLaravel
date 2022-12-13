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
            <section className="lg:flex bg-[#181A20]">
                <div className="lg:w-[15%]">
                    <Sidebar
                        sidebarOn={sidebarOn}
                        setSidebarOn={setSidebarOn}
                        name={auth.user.name}
                    />
                </div>

                <section className="lg:w-[85%] lg:px-10">
                    <Topbar
                        home={home}
                        pageName={pageName}
                        setSidebarOn={setSidebarOn}
                        name={auth.user.name}
                    />
                    <div className="xl:flex">
                        <div className="xl:w-3/4">
                            <main>{children}</main>
                        </div>

                        <div className="xl:w-1/4 hidden xl:block pl-10 2xl:px-10">
                            <Chat />
                        </div>
                    </div>
                </section>
            </section>
        </>
    );
};

export default HomeLayout;
