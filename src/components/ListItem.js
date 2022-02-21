import { Form, Badge, Card } from "react-bootstrap"
import React, { useState } from "react"

function ListItem({ item, handleCheck }) {
  const [isRowExpanded, setIsRowExpanded] = useState(false)
  const badgeColor = {
    High: "danger",
    Medium: "warning",
    Low: "info",
  }

  return (
    <>
      <tr
        key={item.id}
        data-toggle="collapse"
        data-target={`.multi-collapse${item.id}`}
        aria-controls={`multiCollapseExample${item.id}`}
      >
        <td>
          <Form.Check
            type="checkbox"
            id={`default-checkbox`}
            onChange={() => handleCheck(item)}
          />
        </td>
        <td
          className="expandIcon"
          onClick={() => setIsRowExpanded(!isRowExpanded)}
        >
          {item.description}
        </td>
        <td>
          <span className="p-2">{item.cloud}</span>
        </td>
        <td>
          <span className="p-2">{item.service}</span>
        </td>
        <td>
          <Badge
            className="p-2"
            bg={badgeColor[item.risk]}
            style={{ width: "90px" }}
          >
            {item.risk}
          </Badge>
        </td>
        <td
          className="expandIcon"
          onClick={() => setIsRowExpanded(!isRowExpanded)}
        >
          <h2>{isRowExpanded ? "-" : "+"}</h2>
        </td>
      </tr>
      <tr>
        {isRowExpanded && (
          <td colSpan="5">
            <div className="filterBox" style={{ margin: "-20px 50px 0 40px" }}>
              {item.pageDetail}
            </div>
          </td>
        )}
      </tr>
    </>
  )
}

export default ListItem
