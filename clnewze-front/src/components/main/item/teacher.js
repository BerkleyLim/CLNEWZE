import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import styles from "../main.module.scss";
import {
  Carousel,
  CarouselCaption,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
} from "reactstrap";
import URI from "../../util/URI";
import Teacher from '../../teacher/contents/board/index';
// const items = [
//   {
//     id: 1,
//     altText: "Slide 1",
//     caption: "Slide 1",
//   },
//   {
//     id: 2,
//     altText: "Slide 2",
//     caption: "Slide 2",
//   },
//   {
//     id: 3,
//     altText: "Slide 3",
//     caption: "Slide 3",
//   },
// ];

const MainTeacher = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [items, setItems] = useState([]);

  // 장르 설정 할때 마다
  useEffect(() => {
    URI.get(
      process.env.REACT_APP_API_ROOT +
        "/api/teacher/selectList?major=null"
    )
      .then((res) => setItems(res.data?.data))
      .catch((e) => console.error(e));
  }, []);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items?.map((item) => {
    return (
      <CarouselItem
        className="custom-tag"
        tag="div"
        key={item?.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
          {/* <button type="button" className={`${styles?.commonMainCard}`} style={{backgroundColor:"white"}}>
            1
          </button> */}
          <Teacher boards={items} />
        <CarouselCaption
          className="text-danger"
          // captionText={item?.caption}
          // captionHeader={item?.caption}
        />
      </CarouselItem>
    );
  });
  return (
    <>
      <div className={`${styles?.mainCommonHeader}`}>
        <h1>레스너 찾기</h1>
        <p onClick={() => navigate("/teacher")}>
          <ChevronRight /> 더보기
        </p>
      </div>
      <style>
        {`.custom-tag {
              max-width: 100%;
              height: 500px;
              background: black;
            }`}
      </style>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        {/* <CarouselIndicators
          items={!!items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        /> */}
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>

      {/* <nav
        className={`nav justify-content-center ${styles?.eventMainContainer}`}
      >
        <div className={`${styles?.eventIconPrev}`}>
          <ChevronLeft />
        </div>
        <div className={`${styles?.eventMainBoardCardContainer}`}>
          <button type="button" className={`${styles?.commonMainCard}`}>
            1
          </button>
          <button type="button" className={`${styles?.commonMainCard}`}>
            1
          </button>
          <button type="button" className={`${styles?.commonMainCard}`}>
            1
          </button>
          <button type="button" className={`${styles?.commonMainCard}`}>
            1
          </button>
          <button type="button" className={`${styles?.commonMainCard}`}>
            1
          </button>
          <button type="button" className={`${styles?.commonMainCard}`}>
            1
          </button>
          <button type="button" className={`${styles?.commonMainCard}`}>
            1
          </button>
        </div>
        <div className={`${styles?.eventIconNext}`}>
          <ChevronRight />
        </div>
      </nav> */}
    </>
  );
};

export default MainTeacher;
