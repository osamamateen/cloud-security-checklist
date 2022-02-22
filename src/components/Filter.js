import { Button } from "react-bootstrap"

function Filter({ setFilterBy, setFilter }) {
  const handleChange = (filter, filterBy) => {
    setFilter(filter)
    setFilterBy(filterBy)
  }
  return (
    <div className="filterBox">
      <div className="d-flex">
        <div className="m-1" style={{ width: "10%" }}>
          Cloud Providers:
        </div>
        <div style={{ width: "70%" }}>
          <Button
            size="sm"
            className="m-1"
            variant="outline-light"
            onClick={() => handleChange("cloud", "GCP")}
          >
            GCP
          </Button>
          <Button
            size="sm"
            className="m-1"
            variant="outline-light"
            onClick={() => handleChange("cloud", "AWS")}
          >
            AWS
          </Button>
          <Button
            size="sm"
            className="m-1"
            variant="outline-light"
            onClick={() => handleChange("cloud", "AZURE")}
          >
            AZURE
          </Button>
        </div>
      </div>
      <div className="d-flex">
        <div className="m-1" style={{ width: "10%" }}>
          Services:
        </div>
        <div style={{ width: "70%" }}>
          <Button
            size="sm"
            className="m-1"
            variant="outline-light"
            onClick={() => handleChange("service", "S3")}
          >
            AWS S3
          </Button>
          <Button
            size="sm"
            className="m-1"
            variant="outline-light"
            onClick={() => handleChange("service", "EC2:RI")}
          >
            AWS EC2
          </Button>
          <Button
            size="sm"
            className="m-1"
            variant="outline-light"
            onClick={() => handleChange("service", "LAMBDA")}
          >
            AWS LAMBDA
          </Button>
          <Button
            size="sm"
            className="m-1"
            variant="outline-light"
            onClick={() => handleChange("service", "Instance")}
          >
            GCP VM
          </Button>
          <Button
            size="sm"
            className="m-1"
            variant="outline-light"
            onClick={() => handleChange("service", "storage")}
          >
            Firebase Storage
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Filter
