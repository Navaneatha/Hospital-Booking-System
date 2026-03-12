package com.hospital.service;

import com.hospital.model.User;
import com.hospital.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

@Autowired
UserRepository userRepository;

@Autowired
PasswordEncoder passwordEncoder;

public User register(User user){

user.setPassword(passwordEncoder.encode(user.getPassword()));

return userRepository.save(user);
}

}