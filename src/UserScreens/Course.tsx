import React from 'react'
import { Link } from 'react-router-dom'

function Course() {
  return (
    <>
      <div className="container">
        <h1 className='text-center py-5'>Course Catalog</h1>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="border shadow rounded p-2 d-flex flex-column align-items-center">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoBVcRfCQabOOUYbhCKXeJ1w9Dz6fsQapUeF0TjiGvHmb4-FG5SA4Re__AjphAu8T4bgo&usqp=CAU" alt="..." className="img-thumbnail bg-dark" />
              <h4>Web Development</h4>
              <p className='fs-4 p-1 '>A web development course in an LMS system offers a flexible online learning environment, a structured curriculum covering key web development concepts, and hands-on projects</p>
              <h6>Duration <span>
                <p>1 year</p>
                </span> </h6>
              <p className='underline'> Fees: 15000 / year</p>
              <Link className='btn btn-primary' to="/CourseForm">Get Registered</Link>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="border shadow rounded p-2 d-flex flex-column align-items-center">
              <img src="https://cdn.educba.com/academy/wp-content/uploads/2019/01/Careers-in-Web-Designing-1.jpg" alt="..." className="img-thumbnail bg-dark" />
              <h4>Graphic Designer</h4>
              <p className='fs-4 p-1 '>A web designer course in an LMS system equips students with the skills and knowledge needed for modern web design through an accessible online platform.</p>
              <h6>Duration <span>
                <p>1 year</p>
                </span> </h6>
              <p className='underline'> Fees: 15000 / year</p>
              <Link className='btn btn-primary' to="/CourseForm">Get Registered</Link>

            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="border shadow rounded p-2 d-flex flex-column align-items-center">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgpba6AM1EazCicncaZud5-g6nC3ojAxrMhg&usqp=CAU" alt="..." className="img-thumbnail bg-dark" />
              <h4>Computer Science</h4>
              <p className='fs-4 p-1 '>A computer science course in an LMS system provides an accessible platform for learners to acquire essential skills in programming, algorithms, and software development,</p>
              <h6>Duration <span>
                <p>2 year</p>
                </span> </h6>
              <p className='underline'> Fees: 15000 / year</p>
              <Link className='btn btn-primary' to="/CourseForm">Get Registered</Link>
            </div>
          </div>


          <div className="col-md-4 mb-4 py-5">
            <div className="border shadow rounded p-2  d-flex flex-column align-items-center">
              <img src="https://miro.medium.com/v2/resize:fit:1400/1*io4u2NEcJB9ol_K1aU-wHQ.png" alt="..." className="img-thumbnail bg-dark" />
              <h4>Commerce</h4>
              <p className='fs-4 p-1 '>A commerce course in an LMS system offers an accessible online learning experience, covering subjects like accounting, economics, and business management</p>
              <h6>Duration <span>
                <p>2 year</p>
                </span> </h6>
              <p className='underline'> Fees: 15000 / year</p>
              <Link className='btn btn-primary' to="/CourseForm">Get Registered</Link>

            </div>
          </div>


          <div className="col-md-4 mb-4 py-5">
            <div className="border shadow rounded p-2  d-flex flex-column align-items-center">
              <img src="https://www.ncertbooks.guru/wp-content/uploads/2022/04/pre-medical-courses.png" alt="..." className="img-thumbnail bg-dark" />
              <h4>Pre Medical </h4>
              <p className='fs-4 p-1 '>A pre-medical course in an LMS system provides aspiring healthcare professionals with foundational knowledge in biology, chemistry, and other essential sciences,  for pre-med students to build a strong academic foundation.</p>
              <h6>Duration <span>
                <p>4 year</p>
                </span> </h6>
              <p className='underline'> Fees: 50K / year</p>
              <Link className='btn btn-primary' to="/CourseForm">Get Registered</Link>

            </div>
          </div>



          <div className="col-md-4 mb-4 py-5">
            <div className="border shadow rounded p-2  d-flex flex-column align-items-center">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3yTlpTAEWomPbdPmpKgYZMz1m6SGEkeftBA&usqp=CAU" alt="..." className="img-thumbnail bg-dark" />
              <h4>Pre Engeenireing </h4>
              <p className='fs-4 p-1 '>A pre-engineering course in an LMS system offers students a preparatory curriculum covering mathematics, physics, and other fundamental subjects, It provides a convenient online platform for aspiring engineers to build a solid academic foundation.</p>
              <h6>Duration <span>
                <p>3 year</p>
                </span> </h6>
              <p className='underline'> Fees: 100K / year</p>
              <Link className='btn btn-primary' to="/CourseForm">Get Registered</Link>

            </div>
          </div>




        </div>
      </div>
    </>
  )
}

export default Course



