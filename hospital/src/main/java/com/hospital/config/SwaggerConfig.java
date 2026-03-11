package com.hospital.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SwaggerConfig {

    @Bean
    public OpenAPI hospitalOpenAPI() {

        return new OpenAPI()
                .info(new Info()
                        .title("Hospital Appointment API")
                        .description("API documentation for Hospital Appointment System")
                        .version("1.0"));
    }

}