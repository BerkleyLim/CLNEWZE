package com.clnewze.back.clnewzeback.entity.model;

import com.clnewze.back.clnewzeback.util.error.code.ErrorCode;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

import lombok.Data;

@Data
public class ResponseObject<T> {
  String message;
  T data;

  @JsonInclude(value = JsonInclude.Include.NON_NULL)
  String errorMessage;

  @JsonInclude(value = Include.NON_NULL)
  ErrorCode errorCode;

  public ResponseObject() {
  }

  public ResponseObject(String messsage) {
    this.message = messsage;
  }
}
