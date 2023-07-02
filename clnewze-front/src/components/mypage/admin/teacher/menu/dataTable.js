import React, { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";

const ItemTypes = {
  TABLE: 'table'
}

function DataTable({ data, index, MenuDataDndMove }) {
    // drag and drop 관련
  // 참조 : https://velog.io/@suyeonme/React-DragDrop-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0
  // 문서 참조 : https://react-dnd.github.io/react-dnd/docs/api/use-drag
  const ref = useRef(null); // (*)

  const [, drop] = useDrop({
    // (*)
    accept: ItemTypes.TABLE,
    hover(item, monitor) {
      if (item.index === index)
        return
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
      <th scope="row">{index}</th>
      <th scope="row">{data?.orderby}</th>
      <td>{data?.name}</td>
      <td>{data?.category}</td>
    </tr>
  );
}

export default DataTable;
