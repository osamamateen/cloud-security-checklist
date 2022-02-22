import { Alert } from "react-bootstrap"

function ToastMessage({ setShowToast, showToast }) {
  return (
    <div className="mt-5 mb-5">
      {showToast && (
        <Alert
          onClose={() => setShowToast(false)}
          dismissible
          variant="primary"
        >
          Please check your email to verify.
        </Alert>
      )}
    </div>
  )
}

export default ToastMessage
