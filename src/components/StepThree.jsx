import React from 'react'

const StepThree = ({ formData, handleChange, errors }) => {
  return (
     <div className="step-content">
        <div className="section-heading">
         <span className="heading-icon">
          <i className="fa-solid fa-clipboard-list"></i>
         </span>

         <div>
          <h2>Additional details</h2>
          <p>
            A few more details before we review your submission.
          </p>
         </div>
        </div>

      <div className="radio-section">

        <label className="field-title">
            <i className="fa-solid fa-venus-mars"></i>
            Gender
        </label>

        <div className="radio-options">
            <label className={`radio-card 
            ${formData.gender === "Male" ? "selected" : ""}
            `}>

            <input
            type='radio'
            name='gender'
            value='Male'
            checked={formData.gender === "Male"}
            onChange={handleChange}
            />

            <span className="radio-icon">
              <i className="fa-solid fa-mars"></i>
            </span>

            <span>Male</span>
            </label>

            <label className={`radio-card 
            ${formData.gender === "Female" ? "selected" : ""}
            `}>

                <input 
                type='radio'
                name='gender'
                value="Female"
                checked={formData.gender === "Female"}
                onChange={handleChange}
                />

                <span className="radio-icon">
              <i className="fa-solid fa-venus"></i>
            </span>

            <span>Female</span>
            </label>

            <label
            className={`radio-card ${
              formData.gender === "Other" ? "selected" : ""
            }`}
          >
            <input
              type="radio"
              name="gender"
              value="Other"
              checked={formData.gender === "Other"}
              onChange={handleChange}
            />

            <span className="radio-icon">
              <i className="fa-solid fa-user"></i>
            </span>

            <span>Other</span>
          </label>
        </div>

        {errors.gender && (
          <small className="field-error standalone-error">
            <i className="fa-solid fa-circle-exclamation"></i>
            {errors.gender}
          </small>
        )}
      </div>

      <div className="textarea-group">
        <label htmlFor="message">
          <i className="fa-regular fa-message"></i>
          Your Message
        </label>

        <textarea 
        name="message"
        id="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Write something about yourself..."
        rows="5">
        </textarea>

        <div className="character-count">
          {formData.message.length}/300
        </div>

        {errors.message && (
          <small className="field-error">
            <i className="fa-solid fa-circle-exclamation"></i>
            {errors.message}
          </small>
        )}
      </div>
     </div>
  );
};

export default StepThree