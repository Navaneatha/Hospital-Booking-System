package com.hospital.service;

import com.hospital.model.Patient;
import com.hospital.repository.PatientRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PatientService {

@Autowired
PatientRepository repository;

public Patient savePatient(Patient patient){
return repository.save(patient);
}

public List<Patient> getPatients(){
return repository.findAll();
}

}