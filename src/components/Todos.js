import React from "react";
import "./Todos.css";

export const Todos = () => {
  return (
    <div>
    <div class="row">
      <div className="card text-center">
        <div className="card-header">
          <h1>Our Expertise</h1>
          <div className="card-body">

          <div class="row">
          <div class="col-lg-4">
            <img class="rounded-circle" src="/images/coding.jpg" alt="Generic placeholder image" width="140" height="140"/>
            <h1>Architect</h1>
            <p>Cloud and Devops</p></div>
          <div class="col-lg-4">
            <img class="rounded-circle" src="/images/sol.jpg" alt="Generic placeholder image" width="140" height="140"/>
            <h1>Solution</h1>
            <p>Using AI/ML and Blockchain</p></div>
          <div class="col-lg-4">
            <img class="rounded-circle" src="/images/drop.jpg" alt="Generic placeholder image" width="140" height="140"/>
            <h1>Build Application</h1>
            <p>To support end-to-end solution</p></div>
        </div>
            <p>
              we deliver innovative product that are technology driven,scalable and provides end-to-end solution
            </p>
            </div>
          </div>
           </div>
     </div>
       </div>
    
  );
};
