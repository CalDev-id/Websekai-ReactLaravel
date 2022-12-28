import HomeLayout from "@/Layouts/HomeLayout";
import { Link } from "@inertiajs/inertia-react";
import FlashMessage from "@/Components/FlashMessage";

const Index = ({auth, flash}) => {
    return <HomeLayout home={true} pageName={"Websekai"} auth={auth}>
        <div className="pt-20 mx-5">
        <Link href={route('admin.dashboard.movie.create')}><button className="bg-green-500 text-white py-2 rounded-full px-3 font-semibold" type="button">
            Insert New Movie
            </button></Link>
        </div>
        {flash?.message && (
        <FlashMessage message={flash.message} type={flash.type} />
        )}
    </HomeLayout>
};

export default Index;