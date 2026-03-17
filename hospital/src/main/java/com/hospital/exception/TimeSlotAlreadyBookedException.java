package com.hospital.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.CONFLICT)
public class TimeSlotAlreadyBookedException extends RuntimeException {

    private static final long serialVersionUID = 1L;

    public TimeSlotAlreadyBookedException(String message) {
        super(message);
    }
}
