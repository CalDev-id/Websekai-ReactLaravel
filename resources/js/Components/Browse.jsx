import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Link, Head } from "@inertiajs/inertia-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
const Browse = ({ name, genre, movies }) => {
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={10}
                pagination={{
                    clickable: false,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },

                    1280: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}
                modules={[]}
                className="mySwiper h-36 lg:h-56"
            >
                {" "}
                <div>
                    {movies.map((movies) => (
                        <SwiperSlide key={movies.id}>
                            {" "}
                            {/* harusnya ada slug disini */}
                            <Link href={route('user.dashboard.movie.show', movies.slug)} className="absolute group overflow-hidden rounded-2xl">
                                <img
                                    src={`/storage/${movies.thumbnail}`}
                                    className="object-cover h-36 w-full lg:h-56  lg:w-[250px]"
                                    alt=""
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black">
                                    <div className="px-2 pb-4">
                                        <div className="font-medium text-base text-white">
                                            {movies.name}
                                        </div>
                                        <p className="mb-0 text-gray-300 text-xs">
                                            {movies.category}
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:scale-100 lg:group-hover:scale-125 opacity-0 group-hover:opacity-100
                             z-20 transition ease-in-out duration-500"
                                >
                                    <img
                                        src="/icons/ic_play.svg"
                                        className=""
                                        width="50"
                                        alt=""
                                    />
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </div>
            </Swiper>
        </>
    );
};

export default Browse;
