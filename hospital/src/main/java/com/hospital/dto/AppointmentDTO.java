package com.hospital.dto;

import java.time.LocalDate;
import java.time.LocalTime;

public class AppointmentDTO {

    private Long doctorId;
    private Long patientId;

    private LocalDate date;
    private LocalTime startTime;
    private LocalTime endTime;

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
}