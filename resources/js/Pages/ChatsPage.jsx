import HomeLayout from "@/Layouts/HomeLayout";
import Chat from "@/Components/Chat";
import { Head } from "@inertiajs/inertia-react";

const ChatsPage = ({ auth }) => {
    return (
        <HomeLayout home={true} pageName={"Chats"} auth={auth}>
            <Head title="Chats" />
            <div className="pt-20 h-screen px-5">
                <Chat />
            </div>
        </HomeLayout>
    );
};

export default ChatsPage;
