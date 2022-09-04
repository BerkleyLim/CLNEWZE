package clnewze.back.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import clnewze.back.domain.Information;

public interface InformationRepository extends JpaRepository<Information, Long> {

}
