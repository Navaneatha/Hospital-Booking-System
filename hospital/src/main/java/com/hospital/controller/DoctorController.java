package com.hospital.controller;

import com.hospital.model.Doctor;
import com.hospital.service.DoctorService;

import io.swagger.v3.oas.annotations.Operation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/doctors")
@CrossOrigin
public class DoctorController {

    @Autowired
    private DoctorService service;

    @Operation(summary = "Get all doctors")
    @GetMapping
    public List<Doctor> getDoctors(){
        return service.getAllDoctors();
    }

}