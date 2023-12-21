package com.clnewze.back.clnewzeback.util.error.code;

import org.springframework.http.HttpStatus;

import java.util.Date;

public class ErrorResponse {
    // HTTP Response Status Code
    private final HttpStatus httpStatus;

    // General Error message
    private final String message;

    // Error code
    private final ErrorCode errorCode;

    private final Date timestamp;

    protected ErrorResponse(final String message, final ErrorCode errorCode,
            HttpStatus httpStatus) {
        this.message = message;
        this.errorCode = errorCode;
        this.httpStatus = httpStatus;
        this.timestamp = new Date();
    }

    public static ErrorResponse of(final String message, final ErrorCode errorCode,
            HttpStatus httpStatus) {
        return new ErrorResponse(message, errorCode, httpStatus);
    }

    public Integer getStatus() {
        return httpStatus.value();
    }

    public String getMessage() {
        return message;
    }

    public ErrorCode getErrorCode() {
        return errorCode;
    }

    public Date getTimestamp() {
        return timestamp;
    }

}
