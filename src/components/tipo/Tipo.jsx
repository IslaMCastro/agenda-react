import React from "react";


function Tipo() {
    return (
        <div>
            <div>
                <h2>Formulário</h2>                
                    <form className="form-floating">
                        <input 
                        type="text" 
                        className="form-control" 
                        id="descricao" 
                        placeholder="ex: Reunião" 
                        value="" />
                        <label htmlFor="descricao">Digite o Tipo</label>
                    </form>               
                    </div>
            <div>
                <h1>Tabela</h1>
            </div>
        </div>

    );
}

export default Tipo;
