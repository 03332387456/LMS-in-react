// import React, { useState, useEffect } from "react";

// const StudentProgress = ({ studentId }:any) => {
//   const [progressData, setProgressData] = useState([]);

//   useEffect(() => {
//     // Fetch progress data from the fake API
//     fetch(`http://localhost:5000/students?_filter=id&_limit=1&id=${studentId}`)
//       .then((response) => response.json())
//       .then((data) => {
//         setProgressData(data);
//       })
//       .catch((error) => {
//         console.error("Error fetching progress data", error);
//       });
//   }, [studentId]);

//   return (
//     <div>
//       <h2>Student Progress</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Course</th>
//             <th>Assignment 1</th>
//             <th>Assignment 2</th>
//             <th>Final Exam</th>
//             {/* Add more progress metrics here */}
//           </tr>
//         </thead>
//         <tbody>
//           {progressData.map((progress) => (
//             <tr key={progress.id}>
//               <td>{progress.name}</td>
//               <td>{progress.assignment1Score}</td>
//               <td>{progress.assignment2Score}</td>
//               <td>{progress.finalExamScore}</td>
//               {/* Add more progress metrics here */}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default StudentProgress;
















import React, { useState, useEffect } from "react";
import axios from "axios"


export const StudentProgress = axios.create ({
    baseURL : "",
    headers : {
        Authorization : "Bearer"
    }
})

// const StudentProgress = ({ studentId }:any) => {
//   const [progressData, setProgressData] = useState([]);

//   useEffect(() => {
//     // Fetch progress data from the fake API
//     fetch(`http://localhost:5000/students?id=${studentId}`)
//       .then((response) => response.json())
//       .then((data) => {
//         setProgressData(data);
//       })
//       .catch((error) => {
//         console.error("Error fetching progress data", error);
//       });
//   }, [studentId]);




//   return (
//     <div>
//       <h2>Student Progress</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Course</th>
//             <th>Assignment 1</th>
//             <th>Assignment 2</th>
//             <th>Final Exam</th>
//             {/* Add more progress metrics here */}
//           </tr>
//         </thead>
//         <tbody>
//           {progressData.map((progress, key:any) => (
//             <tr key={progress}>
//               <td>{progress}</td>
//               <td>{progress}</td>
//               <td>{progress}</td>
//               <td>{progress}</td>
//               {/* Add more progress metrics here */}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

export default StudentProgress;
