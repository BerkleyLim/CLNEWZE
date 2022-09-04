package clnewze.back.service;

import java.util.List;

import clnewze.back.domain.PracticeRoom;

public interface PracticeRoomService {
    List<PracticeRoom> list(int pageNo, int pageSize);
    PracticeRoom get(int no);
}
