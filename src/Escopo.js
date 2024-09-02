import React, { useState } from 'react';

function Escopo() {
    const [resultado, setResultado] = useState([])

    const formulario = (event) => {
        event.preventDefault();

        const pessoas = ([
            event.target.nome.value,
            event.target.sobrenome.value,
            event.target.peso.value,
            event.target.altura.value
        ]);

        setResultado(pessoas);
    };

    return (
        <div>
            <form className="form" onSubmit={formulario}>
                <p>Nome:<input type='text' className='nome' name='nome'></input></p>
                <p>Sobrenome:<input type='text' className='sobrenome' name='sobrenome' ></input></p>
                <p>Peso:<input type='text' className='peso' name='peso' ></input></p>
                <p>Altura:<input type='text' className='altura' name='altura' ></input></p>
                <button type='submit'>Enviar</button>
            </form>
            {resultado.length > 0 && (
                <div>
                    <h3>Resultado:</h3>
                    <p>Nome: {resultado[0]}</p>
                    <p>Sobrenome: {resultado[1]}</p>
                    <p>Peso: {resultado[2]}</p>
                    <p>Altura: {resultado[3]}</p>
                </div>
            )}
        </div>
    );
};


export default Escopo;