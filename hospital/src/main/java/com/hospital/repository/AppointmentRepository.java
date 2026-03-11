package com.hospital.repository;

import com.hospital.model.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

public interface AppointmentRepository extends JpaRepository<Appointment, Long> {

    List<Appointment> findByDoctorId(Long doctorId);

    boolean existsByDoctorIdAndDateAndStartTime(
            Long doctorId,
            LocalDate date,
            LocalTime startTime
    );

}