package com.hospital.controller;

import com.hospital.model.Doctor;
import com.hospital.service.DoctorService;

import io.swagger.v3.oas.annotations.Operation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/admin")
@CrossOrigin
public class AdminController {

    @Autowired
    private DoctorService service;

    @Operation(summary = "Add doctor")
    @PostMapping("/doctor")
    public Doctor addDoctor(@RequestBody Doctor doctor){
        return service.addDoctor(doctor);
    }

    @Operation(summary = "Delete doctor")
    @DeleteMapping("/doctor/{id}")
    public String deleteDoctor(@PathVariable Long id){

        service.deleteDoctor(id);

        return "Doctor removed";
    }

}