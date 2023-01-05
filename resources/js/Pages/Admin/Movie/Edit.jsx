import HomeLayout from "@/Layouts/HomeLayout";
import { Head, Link, useForm } from "@inertiajs/inertia-react";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import { useEffect } from "react";
import { Inertia } from "@inertiajs/inertia";

const Edit = ({ auth, movie }) => {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        slug: "",
        category: "",
        video_url: "",
        description: "",
        thumbnail: "",
        rating: "",
    });

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "file"
                ? event.target.files[0]
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();

        if (data.thumbnail === movie.thumbnail) {
            delete data.thumbnail;
        }

        Inertia.post(route("admin.dashboard.movie.update", movie.id),{
            _method: "PUT",
            ...data
        });
    };
    return (
        <HomeLayout auth={auth}>
            <Head title="Admin - Edit Movie" />
            <div className="pt-20 mx-5">
                <h1 className="text-3xl font-semibold">Edit movie : {movie.name}</h1>
                <hr className="mb4" />
                <form onSubmit={submit}>
                    <div>
                        <InputError message={errors.name} className="mt-2" />
                        <p>Name</p>
                        <TextInput
                            type="text"
                            name="name"
                            defaultValue={movie.name}
                            className="mt-1 block w-full"
                            handleChange={onHandleChange}
                            placeholder="Enter movie name"
                        />
                    </div>
                    {/* <div>
                        <InputError message={errors.slug} className="mt-2" />
                        <p>Slug</p>
                        <TextInput
                            type="text"
                            name="slug"
                            className="mt-1 block w-full"
                            handleChange={onHandleChange}
                            placeholder="Enter movie Slug"
                        />
                    </div> */}
                    <div>
                        <InputError
                            message={errors.category}
                            className="mt-2"
                        />
                        <p>Category</p>
                        <TextInput
                            type="text"
                            name="category"
                            className="mt-1 block w-full"
                            defaultValue={movie.category}
                            handleChange={onHandleChange}
                            placeholder="Enter Category"
                        />
                    </div>
                    <div>
                        <InputError
                            message={errors.video_url}
                            className="mt-2"
                        />
                        <p>Video Url</p>
                        <TextInput
                            type="url"
                            name="video_url"
                            className="mt-1 block w-full"
                            handleChange={onHandleChange}
                            defaultValue={movie.video_url}
                            placeholder="Enter video url"
                        />
                    </div>
                    <div>
                        <InputError
                            message={errors.description}
                            className="mt-2"
                        />
                        <p>Description</p>
                        <TextInput
                            type="text"
                            name="description"
                            defaultValue={movie.description}
                            className="mt-1 block w-full"
                            handleChange={onHandleChange}
                            placeholder="Enter Description"
                        />
                    </div>
                    <div>
                        <InputError
                            message={errors.thumbnail}
                            className="mt-2"
                        />
                        <p>Video Thumbnail</p>
                        <img src={`/storage/${movie.thumbnail}`} alt="" className="w-40" />
                        <TextInput
                            type="file"
                            name="thumbnail"
                            // defaultValue={movie.thumbnail}
                            className="mt-1 block w-full"
                            handleChange={onHandleChange}
                            placeholder="Enter video Thumbnail"
                        />
                    </div>
                    <div>
                        <InputError message={errors.rating} className="mt-2" />
                        <p>Rating</p>
                        <TextInput
                            type="number"
                            name="rating"
                            className="mt-1 block w-full"
                            defaultValue={movie.rating}
                            handleChange={onHandleChange}
                            placeholder="Enter Rating"
                        />
                    </div>

                    {/* <button type="submit" processing={processing} className="bg-green-500 text-white py-2 rounded-full px-4 mt-5">
                        Save
                    </button> */}
                    <div className="flex items-center justify-center w-full mt-4 rounded-full font-semibold bg-green-600">
                        <PrimaryButton className="" processing={processing}>
                            Save
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </HomeLayout>
    );
};

export default Edit;
