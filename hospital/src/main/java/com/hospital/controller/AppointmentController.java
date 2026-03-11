package com.hospital.controller;

import com.hospital.dto.AppointmentDTO;
import com.hospital.model.Appointment;
import com.hospital.service.AppointmentService;

import io.swagger.v3.oas.annotations.Operation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/appointments")
@CrossOrigin
public class AppointmentController {

    @Autowired
    private AppointmentService service;

    @Operation(summary = "Book appointment")
    @PostMapping("/book")
    public Appointment book(@RequestBody AppointmentDTO dto){
        return service.bookAppointment(dto);
    }

    @Operation(summary = "Get doctor schedule")
    @GetMapping("/doctor/{doctorId}")
    public List<Appointment> schedule(@PathVariable Long doctorId){
        return service.getDoctorAppointments(doctorId);
    }

}