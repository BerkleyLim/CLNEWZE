package com.clnewze.back.clnewzeback.service;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.clnewze.back.clnewzeback.domain.entity.T_user;
import com.clnewze.back.clnewzeback.mapper.TUserMapper;

@Service
// @Log4j2
public class UserService {
  @Autowired
  TUserMapper userMapper;

  // 회원 정보 검색
  public Boolean userSearch(T_user t_user) throws NoSuchAlgorithmException {
    MessageDigest md = MessageDigest.getInstance("SHA-256");
    md.update(t_user.getPassword().getBytes());

    // System.out.println("256 해쉬 내용 : " + md.toString());

    // System.out.println(bytesToHex(md.digest()));
    StringBuilder builder = new StringBuilder();
    for (byte b : md.digest()) {
      builder.append(String.format("%02x", b));
    }
    t_user.setPassword(builder.toString());
    // System.out.println(builder);

    T_user user = userMapper.findByIdAndPassword(t_user.getId(), t_user.getPassword());

    // 검색 일치시
    if (user != null) {
      return true;
    } else {
      return false;
    }
  }
}
