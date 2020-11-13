import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import { Container, Error, Label } from './styles';

function Input ({ name, label, width, mask, ...rest }) {
    const inputRef = useRef(null);
    const { fieldName, defaultValue, registerField, error } = useField(name);
    useEffect(() => {
        registerField({
            name: fieldName,
            path: 'value',
            ref: inputRef.current,
        })
    }, [fieldName, registerField]);
    
    return (
        <Container width={width} error={error}>           
            <input
                id={fieldName}
                ref={inputRef}
                defaultValue={defaultValue}
                {...rest}                
                onChange={(data) => data.target.value = mask ? mask(data.target.value) : data.target.value}
            />    
             {label && <Label>{label}</Label>}        
            { error && <Error>{error}</Error>}
        </Container>
    );
};
export default Input;