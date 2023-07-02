import React, { useState } from "react";
import {
  Carousel,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
  Col,
  Navbar,
  Row,
} from "reactstrap";

import styles from "../teacher.module.scss";
import { category } from "./CategorySample";

const TitleIndex = ({ majormenu }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    // const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    const nextIndex =
      activeIndex === category?.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    // const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    const nextIndex =
      activeIndex === 0 ? category?.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = category?.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item?.key}
      >
        <Row>
          {item?.array?.map((array, index) => (
            <Col key={index}>
              <button type="button" onClick={() => majormenu(item?.category)}>
                {array?.name}
              </button>
            </Col>
          ))}
        </Row>
      </CarouselItem>
    );
  });

  return (
    <div className={`${styles?.title}`}>
      <Navbar className={`${styles?.titleArea}`}>
        <h1>선생님 정보</h1>
      </Navbar>
      <Carousel activeIndex={activeIndex} next={next} previous={previous} dark={true}>
        <CarouselIndicators
          items={category}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
          style={{ bacdgroundColor: "#000" }}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
          style={{ color: "#000" }}
        />
      </Carousel>
      {/* <Navbar className={`${styles?.items_wrap}`}>
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
      </Navbar> */}
    </div>
  );
};

export default TitleIndex;
