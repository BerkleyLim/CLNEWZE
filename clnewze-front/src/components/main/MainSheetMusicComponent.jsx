import React, { useEffect, useState } from "react";
import { ChevronRight } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import styles from "../../scss/main/main.module.scss";

import styled from "styled-components";
import SheetMusicService from "../../service/SheetMusicService";
import { useRecoilState } from "recoil";
import { sheetMusicState } from "../../recoil/state/sheetMusicState";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import { VisibilityContext } from "react-horizontal-scrolling-menu";
import SheetMusicListComponent from "./item/SheetMusicListComponent"

const Left = ({ children, onClick }) => {
  const [show, setShow] = useState(false);
  return show ? (
    <Button onClick={onClick} onMouseLeave={setShow(false)}>
      {children}
    </Button>
  ) : (
    <Transparent onMouseEnter={() => {setShow(true)}} />
  )
}

const LeftArrow = () => {
  const {scrollPrev} = React.useContext(VisibilityContext);
  return <Left onClick={() => scrollPrev()}>{"<-"}</Left>
}

const Right = ({ children, onClick }) => {
  const [show, setShow] = useState(false);
  return show ? (
    <Button onClick={onClick} onMouseLeave={setShow(false)}>
      {children}
    </Button>
  ) : (
    <Transparent onMouseEnter={() => {setShow(true)}} />
  )
}

const RightArrow = () => {
  const {scrollNext} = React.useContext(VisibilityContext);
  return <Right onClick={() => scrollNext()}>{"->"}</Right>
}

const Transparent = styled.div`
  width: 10rem;
  position: absolute;
  z-index: 999;
  height: 50rem;
`;

const Button = styled.button`
  cursor: pointer;
  color: white;
  cursor: pointer;
`;

const MainSheetMusicComponent = () => {
  const navigate = useNavigate();
  const {sheetMusicSelectList} = SheetMusicService();
  const [sheetMusic, setSheetMusic] = useRecoilState(sheetMusicState);

  // 장르 설정 할때 마다
  useEffect(() => {
    const fetchData = async () => {
      const data = await sheetMusicSelectList(null,0,10);

      // error 나면 null 값 표시
      if (!!data) {
        setSheetMusic(data)
      }
    }

    fetchData();

  }, []);

  return (
    <Container>
      {/* 참조 : https://velog.io/@071yoon/React-Horizontal-Scroll-%EA%B5%AC%ED%98%84 */}
      <div className={`${styles?.mainCommonHeader}`}>
        <h1>악보</h1>
        <p onClick={() => navigate("/sheetmusic")}>
          <ChevronRight /> 더보기
        </p>
      </div>
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
            {sheetMusic?.map(
                () => {
                    return (
                      <SheetMusicListComponent />
                    );
                },
            )}
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

export default MainSheetMusicComponent;
