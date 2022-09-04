package clnewze.back.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import clnewze.back.domain.User;

public interface UserRepository extends JpaRepository<User, Long> {

}
