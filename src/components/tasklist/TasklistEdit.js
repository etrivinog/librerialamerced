import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field} from 'redux-form';
import { connect } from 'react-redux';
import { setPropsAsInitial } from '../../helpers/setPropsAsInitial';
import Action from '../Action';
import { Prompt } from 'react-router-dom';

const isRequired = value => (
    !value && "This field is required"
)

const validate = values => {
    
    //Global validation
    const error = {};
    
    /*
    if(!values.name) {
        error.name = "The field must have a value.";
    }
    */
    return error;
}

const MyField = ({input, meta, type, label, name}) => (
    <div>
        <label htmlFor={name}>{label}</label>
        <input {...input} type={ !type ? "text" : type }/>
        {
            meta.touched && meta.error && <span>{meta.error}</span>
        }
    </div>
);

const TasklistEdit = ({ name, handleSubmit, submitting, onBack, pristine, submitSucceeded}) => {
    return (
        <div>
            <h2>Tasklist edit</h2>
            <form className="editForm" onSubmit={handleSubmit}>
                <Field 
                    name="nombre"
                    component={MyField}
                    type="text"
                    validate={isRequired} 
                    label="Nombre" />
                <Field 
                    name="referencia"
                    component={MyField}
                    type="text"
                    //validate={isRequired} 
                    label="Referencia" />
                <Field 
                    name="anio"
                    component={MyField}
                    type="text"
                    //validate={isRequired} 
                    label="Año de publicación" />
                <Field 
                    name="tipoRegistro"
                    component={MyField}
                    type="number"
                    //validate={isRequired} 
                    label="Tipo de registro" />
                <Field 
                    name="numRegistro"
                    component={MyField}
                    type="text"
                    //validate={isRequired} 
                    label="Número de registro" />
                <Field 
                    name="tipoDivulgacion"
                    component={MyField}
                    type="number"
                    validate={isRequired} 
                    label="Tipo de divulgación" />
                
                <Action>
                    <button type="button" disabled={submitting} onClick={onBack}>
                        Cancel
                    </button>
                    <button type="submit" disabled={pristine || submitting}>
                        Accept
                    </button>
                </Action>
                <Prompt
                    when={!pristine && !submitSucceeded}
                    message="Si continúna se perderán los cambios."></Prompt>
            </form>
        </div>
    );
};

TasklistEdit.propTypes = {
    name: PropTypes.string,
    onBack: PropTypes.func.isRequired,
};

const tasklitEditForm = reduxForm(
    {
        form: 'TasklistEdit',
        validate
    })(TasklistEdit);

export default setPropsAsInitial(tasklitEditForm);