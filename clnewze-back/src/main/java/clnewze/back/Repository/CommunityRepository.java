package clnewze.back.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import clnewze.back.domain.Community;

public interface CommunityRepository extends JpaRepository<Community, Long> {

}
