package com.clnewze.back.clnewzeback.room.vo;

import com.clnewze.back.clnewzeback.room.dto.RoomDTO;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;

import java.util.List;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
@RequiredArgsConstructor
@AllArgsConstructor
public class RoomVO {
    private List<RoomDTO> room;
    private Long total;
}
