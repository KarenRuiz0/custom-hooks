import { useState } from "react";

export const useForm = ( initialForm = {} ) => {
    
    // Desestructuración del estado para obtener los valores de los campos
    const  [formState, setFormState ]= useState (initialForm);

    // Manejador de cambios en los campos del formulario
    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        });
    }

    const onResetForm = () => {
        setFormState(initialForm);
    }


    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    }
}
