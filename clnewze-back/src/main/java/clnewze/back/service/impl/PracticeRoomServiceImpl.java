package clnewze.back.service.impl;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Service;

import com.musicstyle.www.author.hyunsik.lim.pms.dao.PracticeRoomDao;

import clnewze.back.domain.PracticeRoom;
import clnewze.back.service.PracticeRoomService;

@Service
public class PracticeRoomServiceImpl implements PracticeRoomService {
    PracticeRoomDao PracticeRoomDao;
   // MainDao mainDao;
   // TagDao tagDao;
   
    public PracticeRoomServiceImpl(/*TagDao tagDao, BoardDao boardDao,*/ PracticeRoomDao PracticeRoomDao) {
        this.PracticeRoomDao = PracticeRoomDao;
//        this.mainDao = mainDao;
//        this.tagDao = tagDao;
    }
   
    @Override
    public List<PracticeRoom> list(int pageNo, int pageSize) {
        HashMap<String,Object> params = new HashMap<>();
        params.put("startRowNo", (pageNo - 1) * pageSize);
        params.put("pageSize", pageSize);
       
        System.out.println((pageNo - 1) * pageSize);
        System.out.println(pageSize);
       
        return PracticeRoomDao.selectList(params);
    }
    
     @Override
     public PracticeRoom get(int no) {
         return PracticeRoomDao.selectOne(no);
     }
   

}
