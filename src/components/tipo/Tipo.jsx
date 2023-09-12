import React from "react";
import { useState, useEffect } from "react";
import api from "../conn/Api";

function Tipo() {
    const [descricao, setDescricao] = useState("");
    const [id, setId] = useState(0)
    const [dados, setDados] = useState([])

    const criar = (e) => {
        e.preventDefault();
        const index = id + 1;
        const item = { index, descricao };
        // o nome dos três pontos é spreds //
        setDados([...dados, item]);
        setId(index)
        setDescricao('')
    }
    const pesquisarTudo = async () => {

        try{
            const response = await api.get('/situacoes')
            if(response.data){
                console.log(response.data)
            }
        }catch(error) {
            console.log("Erro ao pesquisar tudo: ", error)
        }

    }

    return (
        <div>
            <div>
                <h2>Formulário</h2>

                <form className="" action="">
                    <div className="form-floating">
                        <input
                            type="text"
                            className="form-control"
                            id="descricao"
                            placeholder="ex: Reunião"
                            value={descricao}
                            onChange={(e) => setDescricao(e.target.value)}
                        />
                        <label htmlFor="descricao">Digite o Tipo</label>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-end">

                        </div>
                        <button onClick={criar} className="btn btn-success">Salvar</button>
                    </div>
                </form>
            </div>
            <div>
                <h1>Tabela</h1>
            </div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Opções</th>
                    </tr>
                </thead>
                <tbody>
                    {dados.map((item,index) => (
                        <tr key={index}>
                            <td>{item.index}</td>
                            <td>{item.descricao}</td>
                            <td></td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>

    );
}

export default Tipo;
