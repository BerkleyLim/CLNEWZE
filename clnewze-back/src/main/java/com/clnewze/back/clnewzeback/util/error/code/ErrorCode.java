package com.clnewze.back.clnewzeback.util.error.code;

import com.fasterxml.jackson.annotation.JsonValue;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public enum ErrorCode {
    GLOBAL(2),
    ABNORMAL_ACTION(3),

    AUTHENTICATION(10),
    JWT_TOKEN_EXPIRED(11),
    SOCIAL_ID_AUTH_FAIL(12),
    SOCIAL_ID_NOT_FOUND(13),
    AUTHORIZATION(14),
    ORIGINAL_IS_EQUAL(15),
    DEPENDENCY(15),

    INSERT_FAILED(16),
    UPDATE_FAILED(17),
    DELETE_FAILED(18),
    COPY_FAILED(19),

    YOU_HAVE_REQUEST_FROM_SAME_USER(101),
    YOU_ALREADY_HAS_A_FRIENDSHIP(102),
    YOU_ALREADY_MADE_A_REQUEST(103),
    UNABLE_TO_MAKE_A_REQUEST(104),
    NO_SUCH_USER(105),
    BLANK_USER(106),
    USER_TOKEN_STORE_EMPTY(107),

    NICKNAME_HAS_SPECIAL_CHARACTER(201),
    NICKNAME_IS_ALREADY_IN_USE(202),

    BUSINESSCARD_YOU_ALREADY_HAVE(301),
    INVALID_ORDER_STATE(302),

    UNAUTHORIZED(401),
    FORBIDDEN(403),
    NOT_FOUND(404),
    HOST_INVALID_API_CALL(409),

    USER_IS_LOCK(51),
    USER_IS_DORMANT(52),
    USER_IS_DEACTIVATE(53),

    DIRECT_ORDER_FAILED(501),
    FAIL_TO_INSERT(502),

    //

    // Transaction Exception
    TRANSACTION_ROLLBACK_BY_EXCEPTION(701),

    ;

    private int errorCode;

    private ErrorCode(int errorCode) {
        this.errorCode = errorCode;
    }

    @JsonValue
    public int getErrorCode() {
        return errorCode;
    }
}
