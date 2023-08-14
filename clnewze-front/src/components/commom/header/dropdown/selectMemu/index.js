import React from "react";
import { Button, Input, InputGroup } from "reactstrap";
import SelectMenuDropdown from "./dropdown";
import styles from "../../header.module.scss";

const SelectMenuIndex = () => {
  return (
    <div className={`${styles?.header_search}`}>
      <InputGroup>
        <SelectMenuDropdown />
        <Input className="form-control" />
        <Button color="info">검색</Button>
      </InputGroup>
    </div>
  );
}

export default SelectMenuIndex;
