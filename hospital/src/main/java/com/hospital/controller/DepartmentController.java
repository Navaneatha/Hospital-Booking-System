package com.hospital.controller;

import com.hospital.model.Department;
import com.hospital.repository.DepartmentRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/departments")
@CrossOrigin(origins="http://localhost:3000")
public class DepartmentController {

    private final DepartmentRepository repo;

    public DepartmentController(DepartmentRepository repo) {
        this.repo = repo;
    }

    @PostMapping
    public Department addDepartment(@RequestBody Department dept){
        return repo.save(dept);
    }

    @GetMapping
    public List<Department> getDepartments(){
        return repo.findAll();
    }
}