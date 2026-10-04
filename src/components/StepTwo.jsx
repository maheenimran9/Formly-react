import React from 'react'
import FloatingInput from "./FloatingInput";

const StepTwo = ({ formData, handleChange, errors }) => {
  return (
    <div className="step-content">
        <div className="section-heading">
        <span className="heading-icon">
          <i className="fa-solid fa-address-book"></i>
        </span>

        <div>
          <h2>Contact information</h2>
          <p>
            Add the details we can use to contact you.
          </p>
        </div>
      </div>

      <div className='.form-grid'>

        <FloatingInput 
        label="Phone Number"
        name="phone"
        type="tel"
        value={formData.phone}
        onChange={handleChange}
        error={errors.phone}
        icon="fa-solid fa-phone"
        />

        <FloatingInput
        lable="City"
        name="city"
        value={formData.city}
        onChange={handleChange}
        error={errors.country}
        icon="fa-solid fa-earth-americas"
        />

        <FloatingInput
        label="Country"
        name="country"
        value={formData.country}
        onChange={handleChange}
        error={errors.country}
        icon="fa-solid fa-earth-americas"
        />

        <FloatingInput
          label="Postal Code"
          name="postalCode"
          value={formData.postalCode}
          onChange={handleChange}
          error={errors.postalCode}
          icon="fa-solid fa-location-crosshairs"
        />
      </div>
    </div>
  )
}

export default StepTwo