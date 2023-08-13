package com.clnewze.back.clnewzeback.util;

import com.clnewze.back.clnewzeback.entity.model.ResponseObject;
import com.clnewze.back.clnewzeback.util.error.code.ErrorCode;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import lombok.extern.slf4j.Slf4j;

@Slf4j
public class ResponseStatusData {
  public <T> ResponseEntity<ResponseObject<T>> makesErrorMessage(ErrorCode errorCode, String errorMessage) {
    if (errorCode.equals(ErrorCode.TRANSACTION_ROLLBACK_BY_EXCEPTION))
      log.info(errorMessage);
    ResponseObject<T> ro = new ResponseObject<>("Failed");
    ro.setErrorCode(errorCode);
    ro.setErrorMessage("Detailed Message: " + errorMessage);
    return new ResponseEntity<>(ro, HttpStatus.EXPECTATION_FAILED);
  }
}
