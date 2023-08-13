package com.clnewze.back.clnewzeback.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.clnewze.back.clnewzeback.entity.dao.Blog;
import com.clnewze.back.clnewzeback.mapper.BlogMapper;

@Service
public class BlogService {
  @Autowired
  BlogMapper blogMapper;

  public List<Blog> selectList() {
    return blogMapper.selectList();
  }
}
