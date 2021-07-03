import React from 'react';
import Api from '../Api';
import './Login.css';


export default ({onReceive})=>{
    console.log(Api)
    const handleFacebookLogin = async () =>{
        let result = await Api.fbPopup();
        if(result){
            onReceive(result.user);
        }else{
            alert("Erro!");
        }
    }
    return(
        <div className="login">
                <button onClick={handleFacebookLogin}>Logar com o facebook</button>
             </div>
    )
}