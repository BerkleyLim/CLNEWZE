package clnewze.back.domain;

import java.io.Serializable;
import java.sql.Date;

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
public class Teacher implements Serializable {
    private static final long serialVersionUID = 1L;
    
    private int tno;
    private String username;
    private String title;
    private String img;
    private String name;
    private String instrument;
    private String place;
    private String content;
    private Date uploadDate;
    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((content == null) ? 0 : content.hashCode());
        result = prime * result + ((img == null) ? 0 : img.hashCode());
        result = prime * result + ((instrument == null) ? 0 : instrument.hashCode());
        result = prime * result + ((name == null) ? 0 : name.hashCode());
        result = prime * result + ((place == null) ? 0 : place.hashCode());
        result = prime * result + ((title == null) ? 0 : title.hashCode());
        result = prime * result + tno;
        result = prime * result + ((uploadDate == null) ? 0 : uploadDate.hashCode());
        result = prime * result + ((username == null) ? 0 : username.hashCode());
        return result;
    }
    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        Teacher other = (Teacher) obj;
        if (content == null) {
            if (other.content != null)
                return false;
        } else if (!content.equals(other.content))
            return false;
        if (img == null) {
            if (other.img != null)
                return false;
        } else if (!img.equals(other.img))
            return false;
        if (instrument == null) {
            if (other.instrument != null)
                return false;
        } else if (!instrument.equals(other.instrument))
            return false;
        if (name == null) {
            if (other.name != null)
                return false;
        } else if (!name.equals(other.name))
            return false;
        if (place == null) {
            if (other.place != null)
                return false;
        } else if (!place.equals(other.place))
            return false;
        if (title == null) {
            if (other.title != null)
                return false;
        } else if (!title.equals(other.title))
            return false;
        if (tno != other.tno)
            return false;
        if (uploadDate == null) {
            if (other.uploadDate != null)
                return false;
        } else if (!uploadDate.equals(other.uploadDate))
            return false;
        if (username == null) {
            if (other.username != null)
                return false;
        } else if (!username.equals(other.username))
            return false;
        return true;
    }
    @Override
    public String toString() {
        return "Teacher [tno=" + tno + ", username=" + username + ", title=" + title + ", img=" + img + ", name=" + name
                + ", instrument=" + instrument + ", place=" + place + ", content=" + content + ", uploadDate="
                + uploadDate + "]";
    }
    
}
