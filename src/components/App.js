import { ProgressBar, Container, Button, Table, Spinner } from "react-bootstrap"
import { useEffect, useState } from "react"
import {
  getDocs,
  collection,
  limit,
  query,
  where,
  addDoc,
} from "firebase/firestore"
import {
  getAuth,
  isSignInWithEmailLink,
  signInWithEmailLink,
  sendSignInLinkToEmail,
} from "firebase/auth"
import { db } from "../firbase-config"
import UserPopup from "./UserPopup"
import Nav from "./Navbar"
import ListItem from "./ListItem"
import Filter from "./Filter"
function App() {
  const auth = getAuth()

  const [checklist, setChecklist] = useState([])
  const [showPopup, setShowPopup] = useState(false)
  const [count, setCount] = useState(0)
  const [filterBy, setFilterBy] = useState("")
  const [filter, setFilter] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [recordLimit, setLimit] = useState(3)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleClose = () => setShowPopup(false)
  const handleShow = () => setShowPopup(true)
  const handleCheck = (item) => {
    const updatedList = checklist.map((listItem) =>
      listItem.id === item.id
        ? { ...listItem, isChecked: !listItem.isChecked }
        : listItem
    )
    setChecklist(updatedList)

    updateCount(updatedList)
  }

  const createUser = async (user) => {
    const usersCollectionRef = collection(db, "users")
    await addDoc(usersCollectionRef, {
      name: user.name,
      email: user.email,
      organization: user.organization,
      phone: user.phone,
    })
    try {
      await sendSignInLinkToEmail(auth, user.email, {
        url: "http://localhost:3000/?",
        handleCodeInApp: true,
      })
      window.localStorage.setItem("emailForSignIn", user.email)
    } catch (error) {
      console.log(error)
    }
  }

  const updateCount = (list) => {
    const updatedList = list.filter((item) => item.isChecked === true)
    setCount((updatedList.length / list.length) * 100)
  }

  useEffect(() => {
    if (isSignInWithEmailLink(auth, window.location.href)) {
      let email = window.localStorage.getItem("emailForSignIn")
      if (!email) {
        setIsLoggedIn(false)
      } else {
        try {
          signInWithEmailLink(auth, email, window.location.href)
        } catch (err) {}
        setLimit(10)
        setIsLoggedIn(true)
      }
    }
    let q = query(collection(db, "checklist"), limit(recordLimit))
    if (filterBy) {
      q = query(
        collection(db, "checklist"),
        limit(recordLimit),
        where(filter, "==", filterBy)
      )
    }
    const fetchData = async () => {
      setIsLoading(true)
      const docRef = q
      const data = await getDocs(docRef)
      const checklistData = data.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
        isChecked: false,
      }))
      setChecklist((oldChecklistData) => [oldChecklistData, ...checklistData])
      console.log(checklist)
      setIsLoading(false)
    }
    fetchData()
  }, [filterBy, filter, auth, recordLimit])

  return (
    <div className="dark">
      <Nav />
      <Container className="mt-5">
        <Filter setFilterBy={setFilterBy} setFilter={setFilter} />
        <div className="mt-5">
          <div>
            <h5>How secure is your cloud?</h5>
          </div>
          <div className="d-flex">
            <div style={{ width: "5%" }}>
              <h6>{count.toFixed(0)}/100</h6>
            </div>
            <div style={{ width: "95%" }}>
              <ProgressBar animated now={count} />
            </div>
          </div>
        </div>
        <div className="tableContainer">
          <Table borderless>
            <tbody>
              {!isLoading &&
                checklist.length &&
                checklist.map((item, i) => {
                  return (
                    <>
                      {item.name ? (
                        <ListItem
                          item={item}
                          key={item.id}
                          handleCheck={handleCheck}
                          className="listItem"
                        />
                      ) : (
                        <tr key={item.id}></tr>
                      )}
                    </>
                  )
                })}
            </tbody>
          </Table>
        </div>
        <center>
          <div className="m-5">
            {isLoading && (
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            )}
          </div>
        </center>
        <center>
          {!isLoggedIn && (
            <Button className="mt-5" variant="primary" onClick={handleShow}>
              Unlcok Checklist
            </Button>
          )}
        </center>

        <UserPopup
          show={showPopup}
          handleClose={handleClose}
          createUser={createUser}
        />
      </Container>
    </div>
  )
}

export default App
