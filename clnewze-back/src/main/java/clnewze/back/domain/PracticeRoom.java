package clnewze.back.domain;

import java.io.Serializable;

import javax.persistence.Entity;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Entity
@DynamicInsert
@DynamicUpdate
public class PracticeRoom implements Serializable {
    private static final long serialVersionUID = 1L;
    
    // private int no;
    // private int memno;
    // private Date createDate;
    // private String content;
    // private String path;
    // private int count;
    // private int like;
    // private int commtCnt;
    // private String[] boardhashtag;
    // private int totalCnt;
    
    // private String profile;
    
    // private String hashtag;
    // private String nickname;
    // private String comments;
    
    // private String product;
    // private String address;
    // private int poX;
    // private int poY;
    // private int lno;
    

}
