package com.clnewze.back.clnewzeback.configuration;

import javax.sql.DataSource;

import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.SqlSessionTemplate;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;

@Configuration
@MapperScan(value = {
    "com.clnewze.back.clnewzeback.mapper"
}, sqlSessionFactoryRef = "db1SqlSessionFactory")
public class DBConnection {

  @Bean(name = "db1DataSource")
  @Primary
  @ConfigurationProperties(prefix = "spring.db1.datasource")
  public DataSource db1DataSource() {
    return DataSourceBuilder.create().build();
  }

  @Bean(name = "db1SqlSessionFactory")
  @Primary
  public SqlSessionFactory db1SqlSessionFactory(@Qualifier("db1DataSource") DataSource db1DataSource,
      ApplicationContext applicationContext) throws Exception {

    SqlSessionFactoryBean sqlSessionFactoryBean = new SqlSessionFactoryBean();
    // Configuration Location Set

    sqlSessionFactoryBean.setConfigLocation(
        applicationContext.getResource("classpath:/mapper/db1/db1-config.xml"));
    sqlSessionFactoryBean.setTypeAliasesPackage("com.k1ple.k1order.main.entity");
    sqlSessionFactoryBean.setDataSource(db1DataSource);
    sqlSessionFactoryBean.setMapperLocations(
        applicationContext.getResources("classpath*:/mapper/db1/**/*Mapper.xml"));

    return sqlSessionFactoryBean.getObject();
  }

  @Bean(name = "db1SqlSessionTemplate")
  @Primary
  public SqlSessionTemplate db1SqlSessionTemplate(SqlSessionFactory db1SqlSessionFactory) {
    return new SqlSessionTemplate(db1SqlSessionFactory);
  }

}
