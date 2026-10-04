import React from "react";

// Ye component user ko batata hai ke wo form ke kis step par hai.
const ProgressBar = ({ currentStep }) => {
  const steps = [
    {
      number: 1,
      title: "Personal",
      icon: "fa-user",
    },
    {
      number: 2,
      title: "Contact",
      icon: "fa-address-book",
    },
    {
      number: 3,
      title: "Details",
      icon: "fa-clipboard-list",
    },
    {
      number: 4,
      title: "Review",
      icon: "fa-circle-check",
    },
  ];

  return (
    <div className="progress-wrapper">

      {/* Step navigation */}
      <div className="progress-steps">
        {steps.map((step, index) => {
          const completed = currentStep > step.number;
          const active = currentStep === step.number;

          return (
            <React.Fragment key={step.number}>

              {/* Individual step */}
              <div
                className={`progress-step ${
                  active ? "active" : ""
                } ${completed ? "completed" : ""}`}
              >
                <div className="step-circle">
                  {completed ? (
                    <i className="fa-solid fa-check"></i>
                  ) : (
                    <i className={`fa-solid ${step.icon}`}></i>
                  )}
                </div>

                <span>{step.title}</span>
              </div>

              {/* Connecting line between steps */}
              {index < steps.length - 1 && (
                <div
                  className={`step-line ${
                    currentStep > step.number ? "filled" : ""
                  }`}
                ></div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Numeric progress text */}
      <div className="progress-text">
        Step {currentStep} of {steps.length}
      </div>
    </div>
  );
};

export default ProgressBar;