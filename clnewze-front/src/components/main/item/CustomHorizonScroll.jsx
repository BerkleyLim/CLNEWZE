import React from "react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import styled from "styled-components";
import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";

const CustomHorizonScroll = ({data, Component}) => {
  return (
    <Container>
      {/* 참조 : https://velog.io/@071yoon/React-Horizontal-Scroll-%EA%B5%AC%ED%98%84 */}
      
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {data?.map((d, index) => {
          return <Component key={index} data={d} />;
        })}
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
