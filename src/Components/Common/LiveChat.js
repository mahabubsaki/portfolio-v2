import React, { useState } from 'react';
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import ActionProvider from './ChatBot/ActionProvider';
import config from './ChatBot/Config';
import MessageParser from './ChatBot/MessageParser';
import chat from '../../Assets/chat.png'

const LiveChat = () => {
    const [chatOpen, setChatOpen] = useState(false)
    return (
        <div className={`fixed inset-0 flex justify-end items-end ${chatOpen && 'z-20'}`}>
            {chatOpen ? <div className="mr-4 mb-4">
                <h1>hi</h1>
                <Chatbot onClick={() => setChatOpen(false)}
                    config={config}
                    messageParser={MessageParser}
                    actionProvider={ActionProvider}
                /></div> : <img src={chat} onClick={() => setChatOpen(true)} alt="" className='h-[64px] w-[64px] mr-4 mb-4' />}
        </div>

    );
};

export default LiveChat;
{/* <Chatbot
    config={config}
    messageParser={MessageParser}
    actionProvider={ActionProvider}
/> */}