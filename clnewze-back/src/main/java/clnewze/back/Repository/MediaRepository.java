package clnewze.back.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import clnewze.back.domain.Media;

public interface MediaRepository extends JpaRepository<Media, Long> {

}
