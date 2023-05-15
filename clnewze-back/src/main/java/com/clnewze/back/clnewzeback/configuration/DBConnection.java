package com.clnewze.back.clnewzeback.configuration;

import javax.sql.DataSource;

import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.SqlSessionTemplate;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@MapperScan(value = {
    "com.clnewze.back.clnewzeback.mapper"
}, sqlSessionFactoryRef = "sqlSessionFactory")
public class DBConnection {
  /*
   * mybatis:
   * type-aliases-package: com.clnewze.back.clnewzeback.mapper
   * configuration:
   * cache-enabled: true
   * use-column-label: true
   * use-generated-keys: false
   * map-underscore-to-camel-case: true
   * default-statement-timeout: 25000
   * jdbc-type-for-null: NULL
   * mapper-locations: classpath:mapper/*Mapper.xml
   */

  private final ApplicationContext applicationContext;

  DBConnection(ApplicationContext applicationContext) {
    this.applicationContext = applicationContext;
  }

  @Bean
  public SqlSessionFactory sqlSessionFactory(DataSource dataSource) throws Exception {
    SqlSessionFactoryBean sqlSessionFactoryBean = new SqlSessionFactoryBean();
    sqlSessionFactoryBean.setDataSource(dataSource);
    sqlSessionFactoryBean.setTypeAliasesPackage("com.clnewze.back.clnewzeback.domain");
    sqlSessionFactoryBean.setMapperLocations(applicationContext.getResources("classpath:/mapper/*Mapper.xml"));
    return sqlSessionFactoryBean.getObject();
  }

  @Bean
  public SqlSessionTemplate sqlSessionTemplate(SqlSessionFactory sqlSessionFactory) {
    return new SqlSessionTemplate(sqlSessionFactory);
  }
}
