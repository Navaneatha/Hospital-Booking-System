import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDoctorAppointments } from "../services/api";

function DoctorSchedule() {

  const { doctorId } = useParams();
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {

    getDoctorAppointments(doctorId)
      .then((res) => setAppointments(res.data));

  }, [doctorId]);

  return (
    <div>

      <h2>Doctor Schedule</h2>

      {appointments.map((a) => (
        <p key={a.id}>
          {a.patientName} - {a.date}
        </p>
      ))}

    </div>
  );
}

export default DoctorSchedule;