import Sidebar from "@/Components/Sidebar";
import Topbar from "@/Components/Topbar";
import SwiperC from "@/Components/Swiper";
import { useState } from "react";
import { Swiper } from "swiper/react";
import Browse from "@/Components/Browse";
import Flickity from "flickity";

const Index = () => {
    const [sidebarOn, setSidebarOn] = useState(true);

    return (
        <section className="lg:flex bg-[#181A20]">
            <div className="lg:w-[15%]">
                <Sidebar sidebarOn={sidebarOn} setSidebarOn={setSidebarOn} />
            </div>

            <section className="lg:w-[85%] lg:px-10 pb-[2000px]">
                <Topbar setSidebarOn={setSidebarOn} />
                <div className="xl:w-3/4">
                    <SwiperC />
                    <div className="my-2 px-3">
                        <div className="flex mb-3 justify-between text-green-500">
                            <p>Anime Baru</p>
                            <a href="#">selengkapnya..</a>
                        </div>
                        <Browse />
                    </div>
                    <div className="px-3">
                        <div className="flex mb-3 justify-between text-green-500">
                            <p>Anime Baru</p>
                            <a href="#">selengkapnya..</a>
                        </div>
                        <Browse />
                    </div>

                    {/* <div className="gap-[30px]">
                    <Browse />
                    </div> */}
                </div>
            </section>
        </section>
    );
};

export default Index;
