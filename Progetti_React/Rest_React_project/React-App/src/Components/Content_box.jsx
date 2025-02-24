
import React from 'react';

function Content_box() {
    
    return (
        <div style={{display:"inline-flex", backgroundColor:"AppWorkspace", margin:"2pc", borderStyle:"revert-layer"}}>
        <img className="img_c" src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D"/>
        <h3 style={{margin:"2pc", fontFamily:"inherit", fontSize:"2pc"}}>
            Piattaforma Integrata per la Gestione Aziendale e dei Lavoratori.<p></p>
            Officeer è una soluzione web innovativa progettata per semplificare la gestione dei dati aziendali e ottimizzare l'organizzazione dei lavoratori, rendendo i processi più efficienti, sicuri e scalabili.
            <p></p>
            Grazie alla nostra piattaforma, è possibile monitorare facilmente le informazioni relative ai dipendenti, come orari di lavoro, assenze, straordinari e performance
        </h3>
        </div> 
    );
}

export default Content_box;
