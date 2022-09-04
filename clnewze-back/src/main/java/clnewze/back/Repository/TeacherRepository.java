package clnewze.back.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import clnewze.back.domain.Teacher;

public interface TeacherRepository extends JpaRepository<Teacher, Long> {

}
