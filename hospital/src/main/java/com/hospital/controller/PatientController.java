package com.hospital.controller;

import com.hospital.model.Patient;
import com.hospital.service.PatientService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/patients")
@CrossOrigin("*")
public class PatientController {

@Autowired
PatientService service;

@PostMapping("/register")
public Patient addPatient(@RequestBody Patient patient){

return service.savePatient(patient);

}

@GetMapping
public List<Patient> getPatients(){

return service.getPatients();

}

}