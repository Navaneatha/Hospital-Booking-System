package com.hospital.service;

import com.hospital.dto.AppointmentDTO;
import com.hospital.model.Appointment;
import com.hospital.repository.AppointmentRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AppointmentService {

    @Autowired
    private AppointmentRepository repo;

    public Appointment bookAppointment(AppointmentDTO dto){

        boolean exists =
                repo.existsByDoctorIdAndDateAndStartTime(
                        dto.getDoctorId(),
                        dto.getDate(),
                        dto.getStartTime()
                );

        if(exists){
            throw new RuntimeException("Time slot already booked");
        }

        Appointment a = new Appointment();

        a.setDoctorId(dto.getDoctorId());
        a.setPatientId(dto.getPatientId());
        a.setDate(dto.getDate());
        a.setStartTime(dto.getStartTime());
        a.setEndTime(dto.getEndTime());
        a.setStatus("BOOKED");

        return repo.save(a);
    }

    public List<Appointment> getDoctorAppointments(Long doctorId){
        return repo.findByDoctorId(doctorId);
    }

}