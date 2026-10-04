import React from "react";

// Final confirmation slip.
// Form submit hone ke baad entered information yahan display hoti hai.
const SubmissionSlip = ({ formData, submissionId, onReset }) => {

  // Current date ko readable format mein convert karta hai.
  const submittedDate = new Date().toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <div className="success-wrapper">

      {/* Success animation/icon */}
      <div className="success-icon">
        <i className="fa-solid fa-check"></i>
      </div>

      <span className="success-badge">
        <i className="fa-solid fa-circle-check"></i>
        Submission Successful
      </span>

      <h1>Thank you, {formData.firstName}!</h1>

      <p className="success-description">
        Your information has been successfully submitted.
        Here is your submission receipt.
      </p>

      {/* Main receipt/slip */}
      <div className="submission-slip">

        <div className="slip-header">

          <div>
            <div className="brand-mark">
              <i className="fa-solid fa-layer-group"></i>
            </div>

            <div>
              <h2>Formly</h2>
              <p>Submission Receipt</p>
            </div>
          </div>

          <div className="receipt-status">
            <i className="fa-solid fa-circle-check"></i>
            Completed
          </div>
        </div>

        <div className="slip-divider"></div>

        <div className="receipt-meta">

          <div>
            <span>Submission ID</span>
            <strong>{submissionId}</strong>
          </div>

          <div>
            <span>Submitted On</span>
            <strong>{submittedDate}</strong>
          </div>

        </div>

        <div className="receipt-divider"></div>

        <h3 className="receipt-title">
          Submitted Information
        </h3>

        <div className="receipt-grid">

          <div className="receipt-item">
            <span>Full Name</span>
            <strong>
              {formData.firstName} {formData.lastName}
            </strong>
          </div>

          <div className="receipt-item">
            <span>Email</span>
            <strong>{formData.email}</strong>
          </div>

          <div className="receipt-item">
            <span>Phone</span>
            <strong>{formData.phone}</strong>
          </div>

          <div className="receipt-item">
            <span>Date of Birth</span>
            <strong>{formData.dateOfBirth}</strong>
          </div>

          <div className="receipt-item">
            <span>Location</span>
            <strong>
              {formData.city}, {formData.country}
            </strong>
          </div>

          <div className="receipt-item">
            <span>Postal Code</span>
            <strong>{formData.postalCode}</strong>
          </div>

          <div className="receipt-item">
            <span>Gender</span>
            <strong>{formData.gender}</strong>
          </div>

        </div>

        {formData.message && (
          <div className="receipt-message">

            <span>
              <i className="fa-regular fa-message"></i>
              Message
            </span>

            <p>{formData.message}</p>

          </div>
        )}

        <div className="slip-footer">
          <span>
            <i className="fa-solid fa-lock"></i>
            Information received successfully
          </span>

          <span>
            Formly
          </span>
        </div>

      </div>

      {/* Allows user to submit another response */}
      <button
        type="button"
        className="new-submission-btn"
        onClick={onReset}
      >
        <i className="fa-solid fa-arrow-rotate-left"></i>
        Submit Another Response
      </button>
    </div>
  );
};

export default SubmissionSlip;