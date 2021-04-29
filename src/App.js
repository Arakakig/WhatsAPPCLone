import React, {useState,useEffect} from 'react';
import './App.css';
import ChatListItem from './components/ChatListItem';
import ChatIntro from './components/ChatIntro';
import ChatWindow from './components/ChatWindow';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import SearchIcon from '@material-ui/icons/Search';

export default () => {

  const[chatlist,setChatlista] = useState([
    {chatId: 1, title: "fulano de tal", image: 'https://image.freepik.com/vetores-gratis/avatar-de-personagem-de-empresario-isolado_24877-60111.jpg'},
    {chatId: 2, title: "fulano de bal", image: 'https://image.freepik.com/vetores-gratis/avatar-de-personagem-de-empresario-isolado_24877-60111.jpg'},
    {chatId: 3, title: "fulano de cal", image: 'https://image.freepik.com/vetores-gratis/avatar-de-personagem-de-empresario-isolado_24877-60111.jpg'},
    {chatId: 4, title: "fulano de mal", image: 'https://image.freepik.com/vetores-gratis/avatar-de-personagem-de-empresario-isolado_24877-60111.jpg'},

  ]);
  const[activeChat, setActiveChat] = useState({})
  const [user, setuser] = useState({
    id: 1234,
    avatar : 'https://image.freepik.com/vetores-gratis/avatar-de-personagem-de-empresario-isolado_24877-60111.jpg',
    name : "Daniel Almeida"
  })
  return (
    <div className="app-window">
      <div className="sidebar">


        <header>
        <img className="header--avatar" src={user.avatar} alt=""/>
        <div className="header--buttons">
            <div className="header--bnt">
              <DonutLargeIcon style={{color:'#919191'}}/>
            </div>
            <div className="header--bnt">
              <ChatIcon style={{color:'#919191'}}/>
            </div>
            <div className="header--bnt">
              <MoreVertIcon style={{color:'#919191'}}/>
            </div>
          </div>
        </header>
        
        <div className="search">
          <div className="search--input">
            <SearchIcon fontsize="small" style={{color:'#919191'}}/>
            <input type="search" placeholder="Procurar ou começar uma nova conversa"></input>
          </div>
        </div>

        <div className="chatlist">
            {chatlist.map((item, key)=>(
              <ChatListItem 
                key={key}
                data={item}
                active={activeChat.chatId === chatlist[key].chatId}
                onClick={()=>setActiveChat(chatlist[key])}
              />
            ))}
        </div>

      </div>

      <div className="contentarea">
           {activeChat.chatId !== undefined && 
              <ChatWindow
                user={user}
              />
           }
           {activeChat.chatId == undefined &&
             <ChatIntro/>
           }
           
          
      </div>

    </div>
  );
}