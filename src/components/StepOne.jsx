import React from 'react'
import FloatingInput from "./FloatingInput";

const StepOne = ({ formData, handleChange, errors }) => {
    return (
        <div className='step-content'>

            <div className='section-heading'>
                <span className='heading-icon'>
                    <i className="fa-solid fa-user"></i>
                </span>

                <div>
                    <h2>Tell us about yourself</h2>
                    <p>
                        Start with your basic personal information.
                    </p>
                </div>
            </div>

            <div className='form-grid'>

                <FloatingInput 
                label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                error={errors.firstName}
                icon="fa-regular fa-user"
                />

                <FloatingInput
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          error={errors.lastName}
          icon="fa-regular fa-user"
        />

        <FloatingInput
          label="Email Address"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          icon="fa-regular fa-envelope"
        />

        <FloatingInput
          label="Date of Birth"
          name="dateOfBirth"
          type="date"
          value={formData.dateOfBirth}
          onChange={handleChange}
          error={errors.dateOfBirth}
          icon="fa-regular fa-calendar"
        />

            </div>
        </div>
    )
}

export default StepOne