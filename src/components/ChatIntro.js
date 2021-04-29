import React from 'react';
import './ChatIntro.css'
import WhatsIntro  from './whatsintro.jpg'
export default() => {
    return (
        <div className="chatIntro">
            <img src={WhatsIntro} alt="ahhhh n deu"/>
            <h1>Mantenha o seu celular conectado</h1>
            <h2>O Whatsapp conecta ao seu celular para sincronizar suas mensagens. <br></br>
                Para reduzir o uso de dados, conecte seu telefone a uma rede Wi-Fi
            </h2>
        </div>
    );
}