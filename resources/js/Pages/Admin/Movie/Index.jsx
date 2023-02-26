import HomeLayout from "@/Layouts/HomeLayout";
import { Link, Head, useForm } from "@inertiajs/inertia-react";
import FlashMessage from "@/Components/FlashMessage";

const Index = ({ auth, flash, movies }) => {
    const { delete: destroy } = useForm();
    return (
        <HomeLayout home={true} pageName={"Websekai"} auth={auth}>
            <Head title="Movie List" />
            <section className="h-screen">
                <div className="pt-20 mx-5">
                    <Link href={route("admin.dashboard.movie.create")}>
                        <button
                            className="bg-green-500 text-white py-2 rounded-full px-3 font-semibold"
                            type="button"
                        >
                            Insert New Movie
                        </button>
                    </Link>
                </div>
                {flash?.message && (
                    <FlashMessage message={flash.message} type={flash.type} />
                )}
                <table className="table-fixed w-full text-center">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Rating</th>
                            <th colSpan={2}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {movies.map((movie) => (
                            <tr key={movie.id}>
                                <td>
                                    <img
                                        src={`/storage/${movie.thumbnail}`}
                                        className="w-32 rounded-md"
                                    />
                                </td>
                                <td>{movie.name}</td>
                                <td>{movie.category}</td>
                                <td>{movie.rating}</td>
                                <td>
                                    <Link
                                        href={route(
                                            "admin.dashboard.movie.edit",
                                            movie.id
                                        )}
                                    >
                                        <button type="button">Edit</button>
                                    </Link>
                                </td>
                                <td>
                                    <button
                                        onClick={() => {
                                            destroy(
                                                route(
                                                    "admin.dashboard.movie.destroy",
                                                    movie.id
                                                )
                                            );
                                        }}
                                        type="button"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </HomeLayout>
    );
};

export default Index;
