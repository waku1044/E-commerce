import {createStore } from 'redux';

const initialState = {
    tituloProducto: '',
    categoria: '',
    img: '',
    precio: '',
    id: '',
    fecha: '',
    hora: '',
    descripcion: '',

};

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_PRODUCTO':
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

const store = createStore(
    
)