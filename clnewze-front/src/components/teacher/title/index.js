import React, { useState } from "react";
import {
  Button,
  Carousel,
  CarouselCaption,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
  Input,
  InputGroup,
  Navbar,
  Row,
} from "reactstrap";

import styles from "../teacher.module.scss";

const TitleIndex = ({ majormenu }) => {
  const items = [
    {
      key: 0,
      title: "전체",
      onClick: majormenu(null),
    },
    {
      key: 1,
      title: "피아노",
      onClick: majormenu("piano"),
    },
    {
      key: 2,
      title: "현악기",
      onClick: majormenu("string"),
    },
    {
      key: 3,
      title: "관악기",
      onClick: majormenu("wind"),
    },
    {
      key: 4,
      title: "기타",
      onClick: majormenu("guitar"),
    },
    {
      key: 5,
      title: "국악",
      onClick: majormenu("gugak"),
    },
    {
      key: 6,
      title: "다른악기",
      onClick: majormenu("etc"),
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

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

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item?.key}
      >
        <button type="button" onClick={item?.onClick}>
          {item?.title}
        </button>
      </CarouselItem>
    );
  });
  return (
    <div className={`${styles?.title}`}>
      <Navbar className={`${styles?.titleArea}`}>
        <h1>선생님 정보</h1>
      </Navbar>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        {/* <CarouselIndicators
          items={items}
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
      <Navbar className={`${styles?.items_wrap}`}>
        <button type="button" onClick={() => majormenu(null)}>
          전체
        </button>
        <button type="button" onClick={() => majormenu("piano")}>
          피아노
        </button>
        <button type="button" onClick={() => majormenu("string")}>
          현악기
        </button>
        <button type="button" onClick={() => majormenu("wind")}>
          관악기
        </button>
        <button type="button" onClick={() => majormenu("guitar")}>
          기타
        </button>
        <button type="button" onClick={() => majormenu("gugak")}>
          국악
        </button>
        <button type="button" onClick={() => majormenu("etc")}>
          다른악기
        </button>
      </Navbar>
    </div>
  );
};

export default TitleIndex;
