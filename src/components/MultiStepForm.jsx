import React, { useReducer } from "react";
import { formReducer, initialState } from "../reducer/formReducer";

const MultiStepForm = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const { step, formData, isSubmitted } = state;

  if (isSubmitted) {
    return (
      <div className="form-container">
        <h2>Form Submitted Successfully 🎉</h2>
        <button onClick={() => dispatch({ type: "RESET_FORM" })}>
          Register Again
        </button>
      </div>
    );
  }

  return (
    <div className="form-container">
      <h3>Step {step} / 3</h3>

      {/* STEP 1 */}
      {step === 1 && (
        <>
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FIELD",
                field: "name",
                value: e.target.value,
              })
            }
          />

          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FIELD",
                field: "email",
                value: e.target.value,
              })
            }
          />

          <button
            disabled={!formData.name || !formData.email}
            onClick={() => dispatch({ type: "NEXT_STEP" })}
          >
            Next
          </button>
        </>
      )}

      {/* STEP 2 */}
      {step === 2 && (
        <>
          <input
            type="text"
            placeholder="Username"
            value={formData.username}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FIELD",
                field: "username",
                value: e.target.value,
              })
            }
          />

          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FIELD",
                field: "password",
                value: e.target.value,
              })
            }
          />

          <div className="btn-group">
            <button onClick={() => dispatch({ type: "PREVIOUS_STEP" })}>
              Back
            </button>
            <button
              disabled={!formData.username || !formData.password}
              onClick={() => dispatch({ type: "NEXT_STEP" })}
            >
              Next
            </button>
          </div>
        </>
      )}

      {/* STEP 3 */}
      {step === 3 && (
        <>
          <h4>Review Details</h4>
          <p><b>Name:</b> {formData.name}</p>
          <p><b>Email:</b> {formData.email}</p>
          <p><b>Username:</b> {formData.username}</p>

          <div className="btn-group">
            <button onClick={() => dispatch({ type: "PREVIOUS_STEP" })}>
              Back
            </button>
            <button onClick={() => dispatch({ type: "SUBMIT_FORM" })}>
              Submit
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default MultiStepForm;
