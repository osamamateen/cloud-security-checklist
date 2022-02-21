// import { db } from "../firbase-config"
// import { writeBatch, doc } from "firebase/firestore"
// import { v4 as uuidv4 } from "uuid"

// // import array from "../data.js"    

// /** Simple app that just shows the LightsOut game. */

// function App() {
//   const handleClick = async () => {
//     const batch = writeBatch(db)
//     // array.forEach((el) => {
//       console.log(el)
//       if (el) {
//         var docRef = doc(db, "checklist", uuidv4()) //automatically generate unique id
//         batch.set(docRef, el)
//       }
//     })

//     await batch.commit()
//   }
//   return (
//     <div className="App">
//       <button onClick={handleClick}>Seed db</button>
//     </div>
//   )
// }

// export default App
