import React, { useRef, useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import { TableRow, TableCell, IconButton, TextField, Button } from "@mui/material";
import { Delete as DeleteIcon, Edit as EditIcon, Save as SaveIcon } from "@mui/icons-material";
import { DataMenuType } from "../../../../type/sheet";

const ItemTypes = {
  TABLE: "table",
};

function DataTable({ data, index, MenuDataDndMove, deleteMenu, updateMenu }: any) {
  const [updateMenuData, setUpdateMenuData] = useState<DataMenuType>(data);
  const [isUpdate, setIsUpdate] = useState<boolean>(false);

  const updateOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdateMenuData({
      ...updateMenuData,
      [name]: value,
    });
  };

  // drag and drop 관련
  const ref = useRef<any>(null);

  const [, drop] = useDrop({
    accept: ItemTypes.TABLE,
    hover(item: any, monitor) {
      if (item.index === index) return;
      if (!ref.current) {
        return;
      }

      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect() as any;
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset: any = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      MenuDataDndMove(dragIndex, hoverIndex);

      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.TABLE, data, index },
    type: ItemTypes.TABLE,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  return (
    <TableRow ref={ref} style={{ opacity: isDragging ? 0.5 : 1 }}>
      <TableCell>{index + 1}</TableCell>
      <TableCell>{data?.orderby}</TableCell>
      <TableCell>
        {isUpdate ? (
          <TextField
            name="name"
            defaultValue={data?.name}
            onChange={updateOnChange}
            fullWidth
          />
        ) : (
          data?.name
        )}
      </TableCell>
      <TableCell>
        {isUpdate ? (
          <TextField
            name="category"
            defaultValue={data?.category}
            onChange={updateOnChange}
            fullWidth
          />
        ) : (
          data?.category
        )}
      </TableCell>
      <TableCell>
        {isUpdate ? (
          <IconButton color="primary" onClick={() => { updateMenu(updateMenuData, index); setIsUpdate(!isUpdate) }}>
            <SaveIcon />
          </IconButton>
        ) : (
          <IconButton color="primary" onClick={() => setIsUpdate(!isUpdate)}>
            <EditIcon />
          </IconButton>
        )}
        <IconButton color="secondary" onClick={() => deleteMenu(index)}>
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
}

export default DataTable;
