package com.clnewze.back.clnewzeback.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.clnewze.back.clnewzeback.entity.dao.Blog;
import com.clnewze.back.clnewzeback.entity.vo.BlogVo;
import com.clnewze.back.clnewzeback.mapper.BlogMapper;

@Service
public class BlogService {
  @Autowired
  BlogMapper blogMapper;

  public List<BlogVo> selectList() {
    List<Blog> blog = blogMapper.selectList();
    List<BlogVo> blogVoList = new ArrayList<>();
    for (int i = 0; i < blog.size(); i++) {
      BlogVo blogVo = new BlogVo();
      blogVo.setBno(blog.get(i).getBno());
      blogVo.setTitle(blog.get(i).getTitle());
      blogVo.setContents(blog.get(i).getContents());
      blogVo.setViewNumber(blog.get(i).getViewNumber());

      List<String> strPush = new ArrayList<>();
      for (int tagArr = 0; tagArr < blog.get(i).getTag().split(" ").length; tagArr++) {
        strPush.add(blog.get(i).getTag().split(" ")[tagArr]);
      }
      blogVo.setTag(strPush);
      blogVoList.add(blogVo);
    }
    return blogVoList;
  }
}
