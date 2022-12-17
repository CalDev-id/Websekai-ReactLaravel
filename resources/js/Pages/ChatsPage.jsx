import HomeLayout from "@/Layouts/HomeLayout";
import Chat from "@/Components/Chat";
import { Head } from "@inertiajs/inertia-react";

const ChatsPage = ({ auth }) => {
    return (
        <HomeLayout auth={auth}>
            <Head title="Chats" />
            <div className="pt-16 px-5">
                <Chat />
            </div>
        </HomeLayout>
    );
};

export default ChatsPage;
