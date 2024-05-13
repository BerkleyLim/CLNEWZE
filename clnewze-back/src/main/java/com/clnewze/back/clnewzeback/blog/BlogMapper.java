package com.clnewze.back.clnewzeback.blog;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.clnewze.back.clnewzeback.blog.dto.Blog;

@Repository
@Mapper
public interface BlogMapper {
  public List<Blog> selectList(int pageNo, int limit);

  public int selectListAllCount();
}
