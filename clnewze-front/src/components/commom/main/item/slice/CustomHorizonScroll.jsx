import React, { useState } from "react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import styled from "styled-components";
import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";
import 'react-horizontal-scrolling-menu/dist/styles.css';

// 메인이 되는 부분
const CustomHorizonScroll = ({ data, SelectParentsComponent }) => {
  // const [duration, setDuration] = useState(500);
  // const [isSlide, setIsSlide] = useState(false);
  // // 휠
  // const onWheel = (apiObj, ev) => {
  //   const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;
  //   if (isThouchpad) {
  //     ev.stopPropagation();
  //     return;
  //   }
  //   if (ev.deltaY < 0) {
  //     // NOTE: for transitions

  //     if (!isSlide) {
  //       setIsSlide(true);
  //       apiObj.scrollPrev(undefined, undefined, undefined, { duration });
  //     }
  //     setIsSlide(false);
  //   } else if (ev.deltaY > 0) {
  //     if (!isSlide) {
  //       setIsSlide(true);
  //       apiObj.scrollNext(undefined, undefined, undefined, { duration });
  //     }
  //     setIsSlide(false);
  //   }
  // };
  return (
    <Container>
      {/* 참조 : https://velog.io/@071yoon/React-Horizontal-Scroll-%EA%B5%AC%ED%98%84 */}

      {/* <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} onWheel={onWheel}> */}
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {data?.map((d, index) => {
          return <SelectParentsComponent key={index} data={d} />;
        })}
        {/* {data?.map((d, index) => {
          return <SelectParentsComponent key={index} data={d} />;
        })} */}
      </ScrollMenu>
    </Container>
  );
};

const Container = styled.div`
  overflow: hidden;
  .react-horizontal-scrolling-menu--scroll-container::-webkit-scrollbar {
    display: none;
  }
  .react-horizontal-scrolling-menu--scroll-container {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
`;

export default CustomHorizonScroll;
