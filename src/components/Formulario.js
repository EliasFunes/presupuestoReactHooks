import React, {useState} from 'react';
import Error from './Error';
import shortid from 'shortid';

const Formulario = (props) => {

    const {guardarGasto, guardarCrearGasto} = props;

    const [nombreGasto, guardarNombreGasto] = useState('');
    const [cantidadGasto, guardarCantidadGasto] = useState(0);
    const [error, guardarError] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        if(cantidadGasto < 1 || isNaN(cantidadGasto) || nombreGasto === ''){
            guardarError(true);
            return;
        }

        const gasto = {
            nombreGasto,
            cantidadGasto,
            id: shortid.generate()
        }

        guardarGasto(gasto);
        guardarError(false);

        guardarNombreGasto('')
        guardarCantidadGasto(0);

        guardarCrearGasto(true);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Agrega tus gastos aqui</h2>
            {error ? <Error mensaje='Ambos campos son obligatorios o Presupuesto Incorrecto'/>: null}
            <div className="campo">
                <label htmlFor="">Nombre Gasto</label>
                <input
                type="text"
                className="u-full-width"
                placeholder="ej. Transporte"
                onChange={e => guardarNombreGasto(e.target.value)}
                value={nombreGasto}
                />
            </div>
            <div className="campo">
                <label htmlFor="">Cantidad Gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="ej. 300"
                    onChange={e => guardarCantidadGasto(parseInt(e.target.value, 10))}
                    value={cantidadGasto}
                />
             </div>
            <input type="submit" className="button-primary u-full-width" value="Agregar Gasto"/>
        </form>
    );
};

export default Formulario;
