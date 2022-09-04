package clnewze.back.configuration;

import javax.sql.DataSource;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;

// 참조 : https://congsong.tistory.com/14?category=749196
//      https://jforj.tistory.com/91
//      https://blog.jiniworld.me/55
//      https://jogeum.net/10
//      https://congsong.tistory.com/51
@PropertySource("classpath:/application.yml")
@Configuration/*("spring.datasource.hikari")*/
@MapperScan(basePackages={"profile.back.mapper"}, sqlSessionFactoryRef="sqlSessionFactory", sqlSessionTemplateRef="sqlSessionTemplate")
public class DBConfiguration {
//    @Autowired
//    private ApplicationContext applicationContext;

    @Bean
    @ConfigurationProperties(prefix = "spring.datasource.hikari")
    public HikariConfig hikariConfig() {
        return new HikariConfig();
    }

    @Bean
    public DataSource dataSource() {
        return new HikariDataSource(hikariConfig());
    }

//    @Bean
//    @ConfigurationProperties(prefix = "mybatis.mapper-locations")
//    public SqlSessionFactory sqlSessionFactory() throws Exception {
//        SqlSessionFactoryBean factoryBean = new SqlSessionFactoryBean();
//        factoryBean.setDataSource(dataSource());
//        factoryBean.setMapperLocations(applicationContext.getResources("classpath:/mapper/*Mapper.xml"));
////        factoryBean.setMapperLocations(applicationContext.getResources("classpath:/mapper/*Mapper.xml"));
//        return factoryBean.getObject();
//    }
//
//
//    @Bean
//    public SqlSessionTemplate sqlSession() throws Exception {
//        return new SqlSessionTemplate(sqlSessionFactory());
//    }
    

}