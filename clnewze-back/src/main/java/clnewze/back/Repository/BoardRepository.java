package clnewze.back.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import clnewze.back.domain.Board;

public interface BoardRepository extends JpaRepository<Board, Long> {

}
