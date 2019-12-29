import React, {Fragment, useState} from 'react';
import Error from "./Error";

const Pregunta = (props) => {

    const {guardarPresupuesto, guardarPreguntaPresupuesto, guardarRestante} = props;

    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        if(cantidad < 1 || isNaN(cantidad)){
            guardarError(true);
            return;
        }
        guardarError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        guardarPreguntaPresupuesto(false);
    }

    return (
        <Fragment>
            <h2>Coloca tu presupuesto</h2>
            {error ? <Error mensaje='El presupuesto es incorrecto'/>: null}

            <form action="" onSubmit={handleSubmit}>
                <input type="number" className="u-full-width" placeholder="Agrega tu presupuesto"
                    onChange={e => guardarCantidad(parseInt(e.target.value, 10))}
                />
                <input type="submit" className="button-primary u-full-width" value="Definir Presupuesto"/>
            </form>
        </Fragment>

    );
};

export default Pregunta;
