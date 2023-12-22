import React, { useEffect, useState } from "react";
import { ChevronRight } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import styles from "../main.module.scss";

import {
  Carousel,
  CarouselCaption,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
} from "reactstrap";
import restApiAllUser from "../../../util/restApiAllUser";
import SheetMusic from "../../sheetmusic/contents/board/SheetMusicListComponent";
import styled from "styled-components";
import SheetMusicContainer from "../../../hooks/SheetMusicContainer";
import SheetMusicService from "../../../service/SheetMusicService";
import { useRecoilState } from "recoil";
import { sheetMusicState } from "../../../recoil/state/sheetMusicState";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import { VisibilityContext } from "react-horizontal-scrolling-menu";
import SheetMusicListComponent from "./SheetMusicListComponent"

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

const MainSheetMusic = () => {
  const navigate = useNavigate();
  // const [activeIndex, setActiveIndex] = useState(0);
  // const [animating, setAnimating] = useState(false);
  // const [items, setItems] = useState([]);
  const {sheetMusicSelectList} = SheetMusicService();
  const [sheetMusic, setSheetMusic] = useRecoilState(sheetMusicState);

  // 장르 설정 할때 마다
  useEffect(() => {
    // request parameter : genre, pageNo, limit
    const fetchData = async () => {
      const data = await sheetMusicSelectList(null,0,10);

      // error 나면 null 값 표시
      if (!!data) {
        setSheetMusic(data)
      }
    }

    fetchData();

    
    // restApiAllUser
    //   .get(process.env.REACT_APP_API_ROOT + "sheetmusic/selectList?genre=null")
    //   .then((res) => setItems(res.data?.data))
    //   .catch((e) => console.error(e));
  }, []);

  // const next = () => {
  //   if (animating) return;
  //   const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
  //   setActiveIndex(nextIndex);
  // };

  // const previous = () => {
  //   if (animating) return;
  //   const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
  //   setActiveIndex(nextIndex);
  // };

  // const goToIndex = (newIndex) => {
  //   if (animating) return;
  //   setActiveIndex(newIndex);
  // };

  // const slides = items?.map((item, index) => {
  //   return (
  //     <CarouselItem
  //       className="custom-tag"
  //       tag="div"
  //       key={index}
  //       onExiting={() => setAnimating(true)}
  //       onExited={() => setAnimating(false)}
  //     >
  //       <SheetMusic boards={items} />
  //       <CarouselCaption
  //         className="text-danger"
  //         // captionText={item?.caption}
  //         // captionHeader={item?.caption}
  //       />
  //     </CarouselItem>
  //   );
  // });
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
    // <>
    //   <div className={`${styles?.mainCommonHeader}`}>
    //     <h1>악보</h1>
    //     <p onClick={() => navigate("/information")}>
    //       <ChevronRight /> 더보기
    //     </p>
    //   </div>
    //   <style>
    //     {`.custom-tag {
    //           max-width: 100%;
    //           height: 500px;
    //           background: black;
    //         }`}
    //   </style>
    //   <Carousel activeIndex={activeIndex} next={next} previous={previous}>
    //     {/* <CarouselIndicators
    //       items={!!items}
    //       activeIndex={activeIndex}
    //       onClickHandler={goToIndex}
    //     /> */}
    //     {slides}
    //     <CarouselControl
    //       direction="prev"
    //       directionText="Previous"
    //       onClickHandler={previous}
    //     />
    //     <CarouselControl
    //       direction="next"
    //       directionText="Next"
    //       onClickHandler={next}
    //     />
    //   </Carousel>
    // </>
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

export default MainSheetMusic;
