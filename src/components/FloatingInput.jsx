import React from 'react'

const FloatingInput = ({
    label,
    name,
    type = "text",
    value,
    onChange,
    placeholder = "",
    error,
    icon,
}) => {
    return (
        <div className={`input-group ${error ? "has-error" : ""}`}>

            {icon && (<i className={`field-icon ${icon}`} aria-hidden="true"></i>)}

            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                autoComplete="off"
                placeholder={placeholder}
                className="input"
            />

            <label className='user-label'>
                {label}
            </label>

            {error && (
                <small className='field-error'>
                    <i className="fa-solid fa-circle-exclamation"></i>
                    {error}
                </small>
            )}
        </div>
    )
}

export default FloatingInput