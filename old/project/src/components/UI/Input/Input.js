import React from 'react';
import styles from './Input.module.css';

const input = ({
    label,
    elementType,
    touched,
    elementConfig,
    value,
    invalid,
    shouldValidate,
    errormessage,
    changed,
}) => {
    let inputElement = null;
    const inputClasses = [styles.InputElement];

    if (invalid && shouldValidate && touched) {
        inputClasses.push(styles.Invalid);
    }

    switch (elementType) {
        case 'input':
            inputElement = (
                <input className={inputClasses.join(' ')} {...elementConfig} value={value} onChange={changed} />
            );
            break;
        case 'textarea':
            inputElement = (
                <textarea className={inputClasses.join(' ')} {...elementConfig} value={value} onChange={changed} />
            );
            break;
        case 'select':
            inputElement = (
                <select
                    className={inputClasses.join(' ')}
                    value={value}
                    onChange={changed}
                    multiple={elementConfig.multiple}
                >
                    {elementConfig.options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            );
            break;
        default:
            inputElement = (
                <input className={inputClasses.join(' ')} {...elementConfig} value={value} onChange={changed} />
            );
    }

    let validationError = null;
    if (invalid && touched) {
        validationError = <p className={styles.ValidationError}>{errormessage}</p>;
    }

    return (
        <div className={styles.Input}>
            <label className={styles.Label}>{label}</label>
            {inputElement}
            {validationError}
        </div>
    );
};

export default input;
