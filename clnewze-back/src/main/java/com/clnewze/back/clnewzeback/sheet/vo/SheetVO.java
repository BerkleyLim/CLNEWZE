package com.clnewze.back.clnewzeback.sheet.vo;

import com.clnewze.back.clnewzeback.sheet.dto.SheetDTO;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;

import java.util.List;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
@RequiredArgsConstructor
@AllArgsConstructor
public class SheetVO {
    private List<SheetDTO> sheet;
    private Long total;
}
