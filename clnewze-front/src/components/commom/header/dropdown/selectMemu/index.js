import React from "react";
import { Button, Input, InputGroup } from "reactstrap";
import SelectMenuDropdown from "./dropdown";

const index = () => {
  return (
    <div className="header_search">
      <InputGroup>
        <SelectMenuDropdown />
        <Input className="form-control" />
        <Button>검색</Button>
      </InputGroup>
    </div>
  );
}

export default index;
