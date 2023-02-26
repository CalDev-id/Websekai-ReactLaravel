import HomeLayout from "@/Layouts/HomeLayout";
import { Head } from "@inertiajs/inertia-react";
import { Link } from "@inertiajs/inertia-react";

export default function Favourites({ auth, favourites, movies }) {
    return (
        <HomeLayout home={true} pageName={"My List"} auth={auth}>
            <Head title="Favourites" />
            <div className="h-screen py-20 md:py-10 px-3">
                <h1 className="text-2xl font-bold mb-5 hidden md:block">
                    My List
                </h1>
                <div className="grid grid-cols-2 md:grid-cols-4">
                    {favourites.map((favourite) => (
                        // <div key={favourite.id} className="relative">
                        //     <p className="absolute left-3 bg-green-500 rounded-lg px-2 text-white text-sm top-3 md:py-1">{favourite.movie.rating}</p>
                        //     <p className="absolute bottom-5 left-5 text-white font-semibold text-xl">{favourite.movie.name}</p>
                        //     <img
                        //         src={`/storage/${favourite.movie.thumbnail}`}
                        //         className="object-cover h-52 w-full px-1 lg:h-56  lg:w-[250px] rounded-xl mb-3"
                        //         alt=""
                        //     />

                        // </div>
                        <div key={favourite.id}>
                            <Link
                                key={favourite.movie.id}
                                href={route(
                                    "user.dashboard.movie.show",
                                    favourite.movie.slug
                                )}
                                className="absolute group overflow-hidden rounded-2xl"
                            >
                                <img
                                    src={`/storage/${favourite.movie.thumbnail}`}
                                    className="object-cover h-36 w-full lg:h-56  lg:w-[250px]"
                                    alt=""
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black">
                                    <div className="px-2 pb-4">
                                        <div className="font-medium text-base text-white">
                                            {favourite.movie.name}
                                        </div>
                                        <p className="mb-0 text-gray-300 text-xs">
                                            {favourite.movie.category}
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
                        </div>
                    ))}
                </div>
            </div>
        </HomeLayout>
    );
}
