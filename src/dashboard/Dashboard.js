import React from "react";

import { previous, next, today } from "../utils/date-time";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


/**
 * Defines the dashboard page.
 * @param date
 *  the date for which the user wants to view reservations.
 * @returns {JSX.Element}
 */
function Dashboard({ date }) {
  const history = useHistory();






  

  return (
    <main>
      <h1>Dashboard</h1>
      <div className="d-md-flex mb-3">
        <h4 className="mb-0">Reservations for {date}: </h4>
      </div>
      
      <button type="button" onClick ={()=>history.push(`/dashboard?date=${previous(date)}`)}>Previous</button>
      <button type="button" onClick ={()=>history.push(`/dashboard?date=${today()}`)}>Today</button>
      <button type="button" onClick ={()=>history.push(`/dashboard?date=${next(date)}`)}>Next</button>
    </main>
  );
}

export default Dashboard;
