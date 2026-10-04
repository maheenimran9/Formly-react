import React, { useState } from "react";

import ProgressBar from "./components/ProgressBar";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";
import ReviewStep from "./components/ReviewStep";
import SubmissionSlip from "./components/SubmissionSlip";

// Initial form state.
// Har input ka data isi single object mein store hoga.
const initialFormData = {
  firstName: "",
  lastName: "",
  email: "",
  dateOfBirth: "",
  phone: "",
  city: "",
  country: "",
  postalCode: "",
  gender: "",
  message: "",
};

function App() {

  // currentStep decide karta hai ke kaunsa form step visible hoga.
  const [currentStep, setCurrentStep] = useState(1);

  // Form ke tamam inputs ka data yahan store hota hai.
  const [formData, setFormData] = useState(initialFormData);

  // Validation errors ko yahan store karte hain.
  const [errors, setErrors] = useState({});

  // Jab form submit ho jaye to ye true hoga.
  const [submitted, setSubmitted] = useState(false);

  // Successful submission ke baad unique-looking receipt ID generate hoti hai.
  const [submissionId, setSubmissionId] = useState("");

  // Har input change par corresponding field update hoti hai.
  const handleChange = (event) => {
    const { name, value } = event.target;

    // Existing form data ko preserve karte hue sirf changed field update karte hain.
    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

    // User input correct kare to us field ka previous error remove kar dete hain.
    if (errors[name]) {
      setErrors((previousErrors) => ({
        ...previousErrors,
        [name]: "",
      }));
    }
  };

  // Step 1 validation.
  const validateStepOne = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required.";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!formData.dateOfBirth) {
      newErrors.dateOfBirth = "Date of birth is required.";
    }

    return newErrors;
  };

  // Step 2 validation.
  const validateStepTwo = () => {
    const newErrors = {};

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (
      !/^[0-9+\-\s()]{7,20}$/.test(formData.phone)
    ) {
      newErrors.phone = "Enter a valid phone number.";
    }

    if (!formData.city.trim()) {
      newErrors.city = "City is required.";
    }

    if (!formData.country.trim()) {
      newErrors.country = "Country is required.";
    }

    if (!formData.postalCode.trim()) {
      newErrors.postalCode = "Postal code is required.";
    }

    return newErrors;
  };

  // Step 3 validation.
  const validateStepThree = () => {
    const newErrors = {};

    if (!formData.gender) {
      newErrors.gender = "Please select your gender.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter a short message.";
    } else if (formData.message.length > 300) {
      newErrors.message = "Message must be under 300 characters.";
    }

    return newErrors;
  };

  // Current step ke according correct validation function run karta hai.
  const validateCurrentStep = () => {
    let newErrors = {};

    if (currentStep === 1) {
      newErrors = validateStepOne();
    }

    if (currentStep === 2) {
      newErrors = validateStepTwo();
    }

    if (currentStep === 3) {
      newErrors = validateStepThree();
    }

    // Validation errors state mein save karte hain.
    setErrors(newErrors);

    // True means current step valid hai.
    return Object.keys(newErrors).length === 0;
  };

  // Next button press karne par current step validate hota hai.
  const handleNext = () => {
    if (!validateCurrentStep()) {
      return;
    }

    // Agar validation successful ho to next step par move karte hain.
    setCurrentStep((previousStep) => previousStep + 1);

    // New step par purane errors remove kar dete hain.
    setErrors({});
  };

  // Back button user ko previous step par le jata hai.
  const handleBack = () => {
    setCurrentStep((previousStep) => previousStep - 1);

    setErrors({});
  };

  // Review screen se Edit button click hone par direct relevant step open hota hai.
  const handleEdit = (step) => {
    setCurrentStep(step);

    setErrors({});
  };

  // Final submit function.
  const handleSubmit = (event) => {
    event.preventDefault();

    // Review step par dobara complete validation ensure karte hain.
    const stepOneErrors = validateStepOne();
    const stepTwoErrors = validateStepTwo();
    const stepThreeErrors = validateStepThree();

    const allErrors = {
      ...stepOneErrors,
      ...stepTwoErrors,
      ...stepThreeErrors,
    };

    // Agar koi validation error hai to submit nahi hoga.
    if (Object.keys(allErrors).length > 0) {
      setErrors(allErrors);

      // User ko first invalid step par wapas bhejte hain.
      if (Object.keys(stepOneErrors).length > 0) {
        setCurrentStep(1);
      } else if (Object.keys(stepTwoErrors).length > 0) {
        setCurrentStep(2);
      } else {
        setCurrentStep(3);
      }

      return;
    }

    // Unique submission ID generate karte hain.
    const generatedId = `FM-${Date.now()
      .toString()
      .slice(-8)}`;

    setSubmissionId(generatedId);

    // Submit hone ke baad success/slip screen show hoti hai.
    setSubmitted(true);

    setErrors({});
  };

  // Form ko completely reset karke new submission start karta hai.
  const handleReset = () => {
    setFormData(initialFormData);
    setCurrentStep(1);
    setErrors({});
    setSubmitted(false);
    setSubmissionId("");
  };

  // Agar submission complete hai to form ki jagah receipt show karo.
  if (submitted) {
    return (
      <main className="app">
        <SubmissionSlip
          formData={formData}
          submissionId={submissionId}
          onReset={handleReset}
        />
      </main>
    );
  }

  return (
    <main className="app">

      {/* Decorative background elements */}
      <div className="background-shape shape-one"></div>
      <div className="background-shape shape-two"></div>

      <div className="form-container">

        {/* Left visual panel */}
        <aside className="brand-panel">

          <div className="brand-logo">
            <span>
              <i className="fa-solid fa-layer-group"></i>
            </span>
            Formly
          </div>

          <div className="brand-content">

            <span className="eyebrow">
              <i className="fa-solid fa-sparkles"></i>
              Smart & Simple
            </span>

            <h1>
              Your details,
              <br />
              <span>beautifully collected.</span>
            </h1>

            <p>
              Complete the form in a few simple steps.
              Review everything before sending your final
              submission.
            </p>

          </div>

          <div className="benefits">

            <div className="benefit">
              <span>
                <i className="fa-solid fa-shield-halved"></i>
              </span>

              <div>
                <strong>Secure</strong>
                <small>Your information stays protected.</small>
              </div>
            </div>

            <div className="benefit">
              <span>
                <i className="fa-solid fa-bolt"></i>
              </span>

              <div>
                <strong>Fast</strong>
                <small>Only a few steps to complete.</small>
              </div>
            </div>

            <div className="benefit">
              <span>
                <i className="fa-solid fa-circle-check"></i>
              </span>

              <div>
                <strong>Reviewable</strong>
                <small>Check your information before submit.</small>
              </div>
            </div>

          </div>

          <div className="panel-footer">
            <span>
              <i className="fa-regular fa-circle-question"></i>
              Need help?
            </span>

            <span>
              Formly © 2026
            </span>
          </div>

        </aside>

        {/* Right form panel */}
        <section className="form-panel">

          <ProgressBar currentStep={currentStep} />

          <form onSubmit={handleSubmit}>

            {/* Render Step 1 */}
            {currentStep === 1 && (
              <StepOne
                formData={formData}
                handleChange={handleChange}
                errors={errors}
              />
            )}

            {/* Render Step 2 */}
            {currentStep === 2 && (
              <StepTwo
                formData={formData}
                handleChange={handleChange}
                errors={errors}
              />
            )}

            {/* Render Step 3 */}
            {currentStep === 3 && (
              <StepThree
                formData={formData}
                handleChange={handleChange}
                errors={errors}
              />
            )}

            {/* Render Review */}
            {currentStep === 4 && (
              <ReviewStep
                formData={formData}
                onEdit={handleEdit}
              />
            )}

            {/* Form navigation buttons */}
            <div className="form-actions">

              {/* Back button first step par hide hai */}
              {currentStep > 1 && (
                <button
                  type="button"
                  className="back-button"
                  onClick={handleBack}
                >
                  <i className="fa-solid fa-arrow-left"></i>
                  Back
                </button>
              )}

              <div className="action-spacer"></div>

              {/* Steps 1-3 par Next button */}
              {currentStep < 4 && (
                <button
                  type="button"
                  className="next-button"
                  onClick={handleNext}
                >
                  Continue
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              )}

              {/* Review step par final Submit button */}
              {currentStep === 4 && (
                <button
                  type="submit"
                  className="submit-button"
                >
                  Submit Form
                  <i className="fa-solid fa-paper-plane"></i>
                </button>
              )}

            </div>

          </form>

        </section>
      </div>
    </main>
  );
}

export default App;