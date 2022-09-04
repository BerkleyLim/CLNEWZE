package clnewze.back.service;

import java.util.List;

import clnewze.back.domain.SheetMusic;

public interface SheetMusicService {
    List<SheetMusic> list(int pageNo, int pageSize);
    SheetMusic get(int no);
}
