package com.clnewze.back.clnewzeback.blog;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.clnewze.back.clnewzeback.blog.dto.Blog;
import com.clnewze.back.clnewzeback.blog.vo.BlogVo;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Service
@Log4j2
@AllArgsConstructor
public class BlogService {
  private BlogMapper blogMapper;

  public List<BlogVo> selectList(int pageNo, int limit) {
    List<Blog> blog = blogMapper.selectList(pageNo, limit);
    List<BlogVo> blogVoList = new ArrayList<>();
    for (int i = 0; i < blog.size(); i++) {
      BlogVo blogVo = new BlogVo();
      blogVo.setBno(blog.get(i).getBno());
      blogVo.setTitle(blog.get(i).getTitle());
      blogVo.setContents(blog.get(i).getContents());
      blogVo.setViewNumber(blog.get(i).getViewNumber());
      blogVo.setUserName("홍길동"); // 임시로 유저명을 수동으로 넣음, 차후 로직 변경 시 적용 예정

      List<String> strPush = new ArrayList<>();
      for (int tagArr = 0; tagArr < blog.get(i).getTag().split(" ").length; tagArr++) {
        strPush.add(blog.get(i).getTag().split(" ")[tagArr]);
      }
      blogVo.setTag(strPush);
      blogVoList.add(blogVo);
    }
    return blogVoList;
  }

  public int selectListAllCount() {
    return blogMapper.selectListAllCount();
  }
}
