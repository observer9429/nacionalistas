import React from 'react'

export const Contactar = () => {



    const limpiar=()=>{
        const $elDiv=document.querySelector('.panelVista');
    $elDiv.innerHTML = "";
       // $elDiv.classList.add('conBlock');

    }

    limpiar();


    return (
        
        <>
            <form className="contact-form addBlock" action="https://formsubmit.co/walt9429@gmail.com" method="POST">

            <legend className="addBlock">Envíanos tus comentarios</legend>
            <input className="addBlock" type="text" name="name" placeholder="Escribe tu nombre" 
            title="El nombre solo acepta letras y espacios en blanco" pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜ\s]+$" 
            required/>

            <input className="addBlock" type="email" name="email" placeholder="Escribe tu correo" title="Email invalido" 
            pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$" required/>

            <input className="addBlock" type="text" name="subject" placeholder="Asunto a tratar" 
            title="El asunto es requerido" required/>

            <textarea className="addBlock" name="comments" cols="50" rows="5" placeholder="Escribe tus comentarios" 
            title="Tu comentario no debe exceder los 255 caracteres"
            data-pattern="^.{1,255}$" required ></textarea>

            <input className="addBlock" type="hidden" name="_next" value="https://www.youtube.com/watch?v=D5_4Ki7ZT1E&list=RDGMEM2VCIgaiSqOfVzBAjPJm-agVM7Lfx9Z366No&index=3&ab_channel=CumbiasparaRecordar"/>

            <input className="addBlock" type="submit" value="Enviar"/>

            

            </form>

            
          </>
            
            
    )
}
