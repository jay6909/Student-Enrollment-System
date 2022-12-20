package com.jayadityaportfolio.StudentEnrollmentSystem.service;

import com.jayadityaportfolio.StudentEnrollmentSystem.model.Student;

import java.util.List;

public interface StudentService {
    public Student saveStudent(Student student);
    public List<Student> getAllStudents();

}
