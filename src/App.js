import React, {useState,useEffect} from 'react';
import './App.css';
import ChatListItem from './components/ChatListItem';
import ChatIntro from './components/ChatIntro';
import ChatWindow from './components/ChatWindow';
import NewChat from './components/NewChat';
import Login from './components/Login';


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
    {chatId: 5, title: "fulano de tal", image: 'https://image.freepik.com/vetores-gratis/avatar-de-personagem-de-empresario-isolado_24877-60111.jpg'},
    {chatId: 6, title: "fulano de tal", image: 'https://image.freepik.com/vetores-gratis/avatar-de-personagem-de-empresario-isolado_24877-60111.jpg'},
    {chatId: 7, title: "fulano de tal", image: 'https://image.freepik.com/vetores-gratis/avatar-de-personagem-de-empresario-isolado_24877-60111.jpg'},
    {chatId: 8, title: "fulano de tal", image: 'https://image.freepik.com/vetores-gratis/avatar-de-personagem-de-empresario-isolado_24877-60111.jpg'},
    {chatId: 9, title: "fulano de tal", image: 'https://image.freepik.com/vetores-gratis/avatar-de-personagem-de-empresario-isolado_24877-60111.jpg'},

  ]);
  const[activeChat, setActiveChat] = useState({})
  const [user, setuser] = useState(null)
  const handleNewChat = ()=>{
    setShowNewChat(true);
  }
  const handleLoginData = async(u)=>{
    let newUser ={
      id: u.uid,
      name: u.displayName,
      avatar: u.photoUrl
    }
    setuser(newUser);
  }
  if(user === null){
    return (<Login onReceive={handleLoginData}/>)
  }
  const [showNewChat, setShowNewChat] = useState(false);
  return (
    <div className="app-window">
      <div className="sidebar">
      <NewChat
        chatlist = {chatlist}
        user = {user}
        show={showNewChat}
        setShow = {setShowNewChat}
      />

        <header>
        <img className="header--avatar" src={user.avatar} alt=""/>
        <div className="header--buttons">
            <div className="header--bnt">
              <DonutLargeIcon style={{color:'#919191'}}/>
            </div>
            <div onClick={handleNewChat} className="header--bnt">
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