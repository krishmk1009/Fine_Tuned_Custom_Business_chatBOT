import React, { useState } from "react";
import "../App.css"

import Modal from "../Components/Modal";
import BouncingDotsLoader from "../Components/Loader";

function Home() {
    const [modalOpen, setModalOpen] = useState(false);
    const [conversation, setConversation] = useState([{ bot: "Hello!!, How can I help you ?" }]);

    const addMessageToConversation = (message) => {
        setConversation((prevConversation) => [...prevConversation, message]);
    };

    return (
        <div className="App">
            <h1 className="font-bold underline">Hey, click on the button to open the modal.</h1>

            <BouncingDotsLoader />
            <button onClick={() => {
                setModalOpen(true);

            }} className="fixed bottom-12 right-12 items-center justify-center bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-full w-12 h-12">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="p-2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                </svg>

            </button>



            {modalOpen && (
                <Modal setOpenModal={setModalOpen}
                    addMessageToConversation={addMessageToConversation}
                    conversation={conversation}
                />
            )}
        </div>


    );
}

export default Home;
