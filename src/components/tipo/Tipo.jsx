import React from "react";
import { useState } from "react";

function Tipo() {
    const [descricao, setDescricao] = useState("");
    function criarObjeto(e){
        setDescricao(e.target.value);
    }
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
                        value={descricao} 
                        onChange={criarObjeto}
                        />
                    <label htmlFor="descricao">Digite o Tipo</label>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                        <button className="btn btn-primary me-md-2" type="button">salvar</button>
                        <button className="btn btn-primary" type="button">deletar</button>
                    </div>
                </form>
            </div>
            <div>
                <h1>Tabela</h1>
            </div>
        </div>

    );
}

export default Tipo;
