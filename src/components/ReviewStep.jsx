import React from "react";

// Review screen user ke entered data ko final submission se pehle show karta hai.
const ReviewStep = ({ formData, onEdit }) => {

  // Reusable information row banane ke liye helper component.
  const ReviewItem = ({ icon, label, value }) => (
    <div className="review-item">

      <div className="review-icon">
        <i className={icon}></i>
      </div>

      <div className="review-info">
        <span>{label}</span>
        <strong>{value || "Not provided"}</strong>
      </div>
    </div>
  );

  return (
    <div className="step-content">

      <div className="section-heading">
        <span className="heading-icon success-heading">
          <i className="fa-solid fa-circle-check"></i>
        </span>

        <div>
          <h2>Review your information</h2>
          <p>
            Make sure everything looks correct before submitting.
          </p>
        </div>
      </div>

      <div className="review-card">

        {/* Personal information section */}
        <div className="review-section">

          <div className="review-section-header">
            <div>
              <span>01</span>
              <h3>Personal Information</h3>
            </div>

            <button
              type="button"
              className="edit-button"
              onClick={() => onEdit(1)}
            >
              <i className="fa-solid fa-pen"></i>
              Edit
            </button>
          </div>

          <div className="review-grid">

            <ReviewItem
              icon="fa-regular fa-user"
              label="First Name"
              value={formData.firstName}
            />

            <ReviewItem
              icon="fa-regular fa-user"
              label="Last Name"
              value={formData.lastName}
            />

            <ReviewItem
              icon="fa-regular fa-envelope"
              label="Email"
              value={formData.email}
            />

            <ReviewItem
              icon="fa-regular fa-calendar"
              label="Date of Birth"
              value={formData.dateOfBirth}
            />

          </div>
        </div>

        {/* Contact information section */}
        <div className="review-section">

          <div className="review-section-header">
            <div>
              <span>02</span>
              <h3>Contact Information</h3>
            </div>

            <button
              type="button"
              className="edit-button"
              onClick={() => onEdit(2)}
            >
              <i className="fa-solid fa-pen"></i>
              Edit
            </button>
          </div>

          <div className="review-grid">

            <ReviewItem
              icon="fa-solid fa-phone"
              label="Phone"
              value={formData.phone}
            />

            <ReviewItem
              icon="fa-solid fa-location-dot"
              label="City"
              value={formData.city}
            />

            <ReviewItem
              icon="fa-solid fa-earth-americas"
              label="Country"
              value={formData.country}
            />

            <ReviewItem
              icon="fa-solid fa-location-crosshairs"
              label="Postal Code"
              value={formData.postalCode}
            />

          </div>
        </div>

        {/* Additional information section */}
        <div className="review-section">

          <div className="review-section-header">
            <div>
              <span>03</span>
              <h3>Additional Details</h3>
            </div>

            <button
              type="button"
              className="edit-button"
              onClick={() => onEdit(3)}
            >
              <i className="fa-solid fa-pen"></i>
              Edit
            </button>
          </div>

          <div className="review-grid">

            <ReviewItem
              icon="fa-solid fa-venus-mars"
              label="Gender"
              value={formData.gender}
            />

            <div className="review-item full-width">
              <div className="review-icon">
                <i className="fa-regular fa-message"></i>
              </div>

              <div className="review-info">
                <span>Message</span>
                <strong>
                  {formData.message || "No message provided"}
                </strong>
              </div>
            </div>

          </div>
        </div>

      </div>

      <div className="secure-note">
        <i className="fa-solid fa-shield-halved"></i>
        Your information is ready for secure submission.
      </div>
    </div>
  );
};

export default ReviewStep;