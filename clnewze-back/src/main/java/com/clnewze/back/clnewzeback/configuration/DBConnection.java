package com.clnewze.back.clnewzeback.configuration;

import javax.sql.DataSource;

import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.SqlSessionTemplate;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;

import com.zaxxer.hikari.HikariConfig;

@Configuration
@MapperScan(value = {
    "com.clnewze.back.clnewzeback.mapper"
}, sqlSessionFactoryRef = "db1SqlSessionFactory")
public class DBConnection {

  // 기본으로 사용할 데이터소스에 @Primary를 넣어줘야함
  @Primary
  @Bean(name = "hikariConfig")
  @ConfigurationProperties(prefix = "spring.datasource.hikari")
  public HikariConfig hikariConfig() {
    return new HikariConfig();
  }

  @Primary
  @Bean(name = "dataSource")
  @ConfigurationProperties(prefix = "spring.datasource")
  public DataSource db1DataSource() {
    return DataSourceBuilder.create().build();
  }

  @Bean(name = "sqlSessionFactory")
  @Primary
  public SqlSessionFactory db1SqlSessionFactory(@Autowired @Qualifier("dataSource") DataSource dataSource,
      ApplicationContext applicationContext) throws Exception {

    SqlSessionFactoryBean sqlSessionFactoryBean = new SqlSessionFactoryBean();

    sqlSessionFactoryBean.setDataSource(dataSource);
    sqlSessionFactoryBean.setTypeAliasesPackage("com.clnewze.back.backclnewze.domain");
    sqlSessionFactoryBean.setConfigLocation(
        applicationContext.getResource("classpath:/mapper/db1/db1-config.xml"));
    sqlSessionFactoryBean.setMapperLocations(
        applicationContext.getResources("classpath*:/mapper/db1/**/*Mapper.xml"));
    // sqlSessionFactoryBean.setConfigLocation(
    // applicationContext.getResource("classpath:/mapper/db1/db1-config.xml"));
    // sqlSessionFactoryBean.setTypeAliasesPackage("com.k1ple.k1order.main.entity");
    // sqlSessionFactoryBean.setDataSource(db1DataSource);
    // sqlSessionFactoryBean.setMapperLocations(
    // applicationContext.getResources("classpath*:/mapper/db1/**/*Mapper.xml"));

    return sqlSessionFactoryBean.getObject();
  }

  @Bean(name = "SqlSessionTemplate")
  @Primary
  public SqlSessionTemplate db1SqlSessionTemplate(SqlSessionFactory db1SqlSessionFactory) {
    return new SqlSessionTemplate(db1SqlSessionFactory);
  }

}
