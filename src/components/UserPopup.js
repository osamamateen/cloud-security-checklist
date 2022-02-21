import { useState } from "react"
import { Modal, Button, Form } from "react-bootstrap"

function UserPopup({ show, handleClose, createUser }) {
  const [user, setUser] = useState({
    name: "",
    email: "",
    organization: "",
    phone: "",
  })

  const updateField = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = () => {
    createUser(user)
    handleClose()
    setUser({
      name: "",
      email: "",
      organization: "",
      phone: "",
    })
  }
  return (
    <Modal show={show} onHide={handleClose} style={{ height: "1900px" }}>
      <Modal.Body>
        <Form.Group className="mb-3" controlId="formBasic">
          <div className="mb-4">
            <Form.Control
              className="mb-3"
              type="text"
              name="name"
              placeholder="Enter full name"
              value={user.name}
              onChange={updateField}
            />
          </div>
          <div className="mb-4">
            <Form.Control
              className="mb-3"
              type="text"
              placeholder="Enter email"
              name="email"
              value={user.email}
              onChange={updateField}
            />
          </div>
          <div className="mb-4">
            <Form.Control
              className="mb-3"
              type="text"
              name="organization"
              placeholder="Enter organization"
              value={user.organization}
              onChange={updateField}
            />
          </div>

          <div className="mb-4">
            <Form.Control
              className="mb-3"
              type="text"
              name="phone"
              placeholder="Enter phone number"
              value={user.phone}
              onChange={updateField}
            />
          </div>
        </Form.Group>
        <center>
          <Button
            variant="primary"
            type="submit"
            onClick={() => handleSubmit(user)}
          >
            Submit
          </Button>
        </center>
      </Modal.Body>
    </Modal>
  )
}

export default UserPopup
