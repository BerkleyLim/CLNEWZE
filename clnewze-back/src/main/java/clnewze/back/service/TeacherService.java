package clnewze.back.service;

import java.util.List;

import clnewze.back.domain.Teacher;

public interface TeacherService {
    List<Teacher> list(int pageNo, int pageSize);
    Teacher get(int no);
}
