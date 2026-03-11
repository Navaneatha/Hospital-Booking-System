package com.hospital.model;

import jakarta.persistence.*;
import java.time.LocalDate;
import java.time.LocalTime;

@Entity
public class Appointment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long doctorId;
    private Long patientId;

    private LocalDate date;

    private LocalTime startTime;
    private LocalTime endTime;

    private String status;

    public Appointment() {}

    public Long getId() { return id; }

    public void setId(Long id) { this.id = id; }

    public Long getDoctorId() { return doctorId; }

    public void setDoctorId(Long doctorId) { this.doctorId = doctorId; }

    public Long getPatientId() { return patientId; }

    public void setPatientId(Long patientId) { this.patientId = patientId; }

    public LocalDate getDate() { return date; }

    public void setDate(LocalDate date) { this.date = date; }

    public LocalTime getStartTime() { return startTime; }

    public void setStartTime(LocalTime startTime) { this.startTime = startTime; }

    public LocalTime getEndTime() { return endTime; }

    public void setEndTime(LocalTime endTime) { this.endTime = endTime; }

    public String getStatus() { return status; }

    public void setStatus(String status) { this.status = status; }
}