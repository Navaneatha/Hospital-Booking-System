package com.hospital.service;

import com.hospital.model.Doctor;
import com.hospital.repository.DoctorRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DoctorService {

    @Autowired
    private DoctorRepository repo;

    public List<Doctor> getAllDoctors(){
        return repo.findAll();
    }

    public Doctor addDoctor(Doctor doctor){
        return repo.save(doctor);
    }

    public void deleteDoctor(Long id){
        repo.deleteById(id);
    }

}