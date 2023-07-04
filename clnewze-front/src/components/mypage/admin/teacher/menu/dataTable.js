import React, { useRef, useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import { Button, Input } from "reactstrap";

const ItemTypes = {
  TABLE: "table",
};

function DataTable({ data, index, MenuDataDndMove, deleteMenu, updateMenu }) {
  const [updateMenuData, setUpdateMenuData] = useState(data);
  const [isUpdate, setIsUpdate] = useState(false);

  const updateOnChange = (e) => {
    const { name, value } = e.target;
    setUpdateMenuData({
      ...updateMenuData,
      [name]: value,
      // orderby: (menuData)?.length +1,
    });
  };

  // drag and drop 관련
  // 참조 : https://velog.io/@suyeonme/React-DragDrop-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0
  // 문서 참조 : https://react-dnd.github.io/react-dnd/docs/api/use-drag
  const ref = useRef(null); // (*)

  const [, drop] = useDrop({
    // (*)
    accept: ItemTypes.TABLE,
    hover(item, monitor) {
      if (item.index === index) return;
      if (!ref.current) {
        return;
      }

      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
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
    // (*)
    item: { type: ItemTypes.TABLE, data, index },
    type: ItemTypes.TABLE,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  drag(drop(ref)); // (*)
  // drag and drop 끝
  return (
    <tr ref={ref} key={index}>
      <th scope="row">{index + 1}</th>
      <th scope="row">{data?.orderby}</th>
      <td>
        {isUpdate ? (
          <Input
            name="name"
            defaultValue={data?.name}
            onChange={updateOnChange}
          />
        ) : (
          data?.name
        )}
      </td>
      <td>
        {isUpdate ? (
          <Input
            name="category"
            defaultValue={data?.category}
            onChange={updateOnChange}
          />
        ) : (
          data?.category
        )}
      </td>
      <td>
        {isUpdate ? (
          <Button onClick={() => {updateMenu(updateMenuData, index); setIsUpdate(!isUpdate)}}>수정</Button>
          ) : (
          <Button onClick={() => setIsUpdate(!isUpdate)}>편집</Button>
        )}
        <Button onClick={() => deleteMenu(index)}>삭제</Button>
      </td>
    </tr>
  );
}

export default DataTable;
