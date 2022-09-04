package clnewze.back.service;

import java.util.List;

import clnewze.back.domain.Media;

public interface MediaService {
    List<Media> list(int pageNo, int pageSize);
    Media get(int no);
}
