import React from 'react'
import project1_img from './project1.jpg'
import project2_img from './project2.jpg'
import project3_img from './project3.jpg'
import project5_img from './project5.jpg'




const Mywork = () => {


  return (
    <div id='project' class="container mb-lg-5">
      <div class=" " style={{ marginTop: 200 }}>
        <h1 class="text-center text-info ">My project</h1>
      </div>
      <div class="row row-cols-sm-1 row-cols-md-2 row-cols-lg-4 mt-5 gap-5 justify-content-around">
        <div class="card" style={{ width: "15rem" }}>
          <img src={project1_img} class="card-img-top h-100 w-100" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Blog</h5>
            <p class="card-text"> The frontend is designed to provide an intuitive interface where users can read posts, while the backend handles core functionalities, post creation, editing, deletion, and data storage.</p>
            <div class="d-flex justify-content-around">
              <a href="abc" class="btn btn-primary">GitUp</a>
              <a href="abc" class="btn btn-primary">Project</a>
            </div>
          </div>
        </div>

        <div class="card" style={{ width: "15rem" }}>
          <img src={project2_img} class="card-img-top h-100 w-100" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Todo List</h5>
            <p class="card-text">The frontend provides users with a clean, responsive interface to add, view, edit, and delete tasks, while the backend handles data storage, user authentication, and task management logic.</p>
            <div class="d-flex justify-content-around">
              <a href="abc" class="btn btn-primary ">GitUp</a>
              <a href="abc" class="btn btn-primary">Project</a>
            </div>
          </div>
        </div>

        <div class="card" style={{ width: "15rem" }}>
          <img src={project3_img} class="card-img-top h-100 w-100" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Ecomerce</h5>
            <p class="card-text"> On the frontend, users can browse through visually appealing product cards, view detailed information, and add items to their cart. On the backend, order processing, and data storage.</p>
            <div class="d-flex justify-content-around">
              <a href="abc" class="btn btn-primary">GitUp</a>
              <a href="abc" class="btn btn-primary">Project</a>
            </div>
          </div>
        </div>

        <div class="card" style={{ width: "15rem" }}>
          <img src={project5_img} class="card-img-top h-100 w-100" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Library</h5>
            <p class="card-text"> In this library project, we use JavaScript's fetch method to retrieve book data from an external API. enabling connect with a remote server and dynamically display a list of books without needing to reload the page. </p>
            <div class="d-flex justify-content-around">
              <a href="abc" class="btn btn-primary">GitUp</a>
              <a href="abc" class="btn btn-primary">Project</a>
            </div>
          </div>
        </div>


      </div>
    </div>


  )
}


export default Mywork