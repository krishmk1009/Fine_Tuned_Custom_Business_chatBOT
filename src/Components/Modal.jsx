import React, { useEffect, useState } from "react";
import "./Modal.css";
import axios from "axios";

function Modal({ setOpenModal, addMessageToConversation, conversation }) {
    const [query, setQuery] = useState("");
    const [answer, setAnswer] = useState("");
    const [showQuery, setShowQuery] = useState(false)
    // const [conversation, setConversation] = useState([{bot:"Hey !! how can I help you ?"}])

    useEffect(() => {

    }, [])

    const formSubmitHandler = async (e) => {
        e.preventDefault();
        console.log(query);

        // setConversation((prevConversion) => [
        //     ...prevConversion,
        //     { user: query }

        // ])
        addMessageToConversation({ user: query })
        try {
            const response = await axios.post("http://localhost:3000", {
                prompt: query
            }, {
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            console.log(response.data);
            const botAnswer = response.data;


            // setConversation((prevConversion) => [
            //     ...prevConversion,

            //     { bot: botAnswer }

            // ])
            addMessageToConversation({ bot: botAnswer })
            setAnswer(botAnswer)


            setShowQuery(true)
            // console.log(data.message)
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div className="modalBackground">
            <div className="modalContainer h-3/5 mb-20 rounded-[20px] flex flex-col justify-between">
                <div className="topSection bg-blue-400 rounded-t-[20px] px-4 py-2 flex items-center justify-between">
                    <div className="titleCloseBtn">
                        <button className="bg-white rounded-full w-8 h-8" onClick={() => setOpenModal(false)}>X</button>
                    </div>
                    <div className="titleCloseBtn ml-auto">
                        <button onClick={() => setModalOpen(true)} className="text-white font-bold rounded-full w-12 h-12">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 ml-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="scrollableContent bg-white flex-grow mt-2 mb-2 pt-2 pb-2 ">
                    <div className="content">
                        {conversation.map((message, index) => (
                            <div className={message.user ? "user" : "bot"} key={index}>
                                <div className="flex ">
                                    {

                                        message.bot && <img src="https://static.botsrv2.com/website/img/quriobot_favicon.1727b193.png" alt="bot Icon" className="w-8 h-8 rounded-full mr-2 " />
                                    }
                                    {

                                        message.user && <img src="https://cdn-icons-png.flaticon.com/512/5087/5087579.png" alt="user Icon" className="w-8 h-8 rounded-full mr-2 w-8 h-8" />
                                    }
                                    <div className="messageContent">
                                        {message.user && <p>{message.user}</p>}
                                        {message.bot && <p>{message.bot}</p>}
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>

                <div className="inputArea bg-white flex-shrink-0 mt-3">
                    <form onSubmit={formSubmitHandler} className="flex">
                        <input className="bg-gray-200 p-5 rounded-md inline-block" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Type here..." />
                        <button type="submit" className="font-bold text-white rounded-full w-9 h-9  ml-2 bg-blue-400">
                            <svg  className="p-1 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM6.75 9.25a.75.75 0 000 1.5h4.59l-2.1 1.95a.75.75 0 001.02 1.1l3.5-3.25a.75.75 0 000-1.1l-3.5-3.25a.75.75 0 10-1.02 1.1l2.1 1.95H6.75z" clip-rule="evenodd" />
                            </svg>


                        </button>
                    </form>
                </div>

            </div>
        </div>


    );
}

export default Modal;
