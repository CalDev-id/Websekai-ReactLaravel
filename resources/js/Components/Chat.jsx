import { useState } from "react";

const Chat = () => {
    const [showChat, setShowChat] = useState(true);

    return (
        <>
            <div
                onClick={() => {
                    setShowChat(!showChat);
                }}
                className="flex text-white font-bold justify-between mb-3 bg-[#35383F] p-3 rounded-lg"
            >
                <p>Recent Chat</p>
                <p className="text-green-500 font-normal">
                    <i className="bx bxs-chat"></i>
                </p>
            </div>

            <div className={showChat ? "bg-[#35383F] p-3 rounded-lg h-fit relative flex flex-col" : "hidden"}>
                <div className="py-1">
                    <p className="text-green-500 text-sm">Dynavx :</p>
                    <p className="text-sm rounded-full border-2 border-slate-400 py-2 text-center w-fit px-3">
                        wah anime bagus
                    </p>
                </div>
                <div className="py-1">
                    <p className="text-green-500 text-sm">Agus Rendang :</p>
                    <p className="text-sm rounded-full border-2 border-slate-400 py-2 text-center  w-fit px-3">
                        keqing wangy bgt
                    </p>
                </div>
                <div className="py-1">
                    <p className="text-green-500 text-sm">Nibras Sumedang :</p>
                    <p className="text-sm rounded-full border-2 border-slate-400 py-2 text-center w-fit px-3">
                        Astagfirullah mending kalian tobat
                    </p>
                </div>
                <div className="py-1">
                    <p className="text-green-500 text-sm">Nibras Sumedang :</p>
                    <p className="text-sm rounded-full border-2 border-slate-400 py-2 text-center w-fit px-3">
                        Ingat, Barang Siapa
                    </p>
                </div>
                <div className="py-1">
                    <p className="text-green-500 text-sm">Agus :</p>
                    <p className="text-sm rounded-full border-2 border-slate-400 py-2 text-center  w-fit px-3">
                        Barang Gw
                    </p>
                </div>
                <div className="flex py-2">
                    <input
                        type="text"
                        placeholder="Type here to send a message"
                        className="input input-bordered input-success w-full max-w-xs border-green-500 text-slate-400 h-9 text-sm"
                    />
                    <span className="text-3xl px-3 self-center text-green-500">
                        <i className="bx bxs-send"></i>
                    </span>
                </div>
            </div>
        </>
    );
};

export default Chat;
