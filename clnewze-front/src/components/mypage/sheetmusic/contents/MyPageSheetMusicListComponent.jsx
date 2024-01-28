import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardText,
  CardTitle,
  Col,
  Row,
} from "reactstrap";
import styles from "../../../../scss/mypage/sheetmusic/mypage.sheetmusic.module.scss";
import SheetMusicContainer from "../../../../hooks/SheetMusicContainer";

const MyPageSheetMusicListComponent = () => {
  const { sheetMusics, onClickView } = SheetMusicContainer();

  return (
    <div className={`${styles?.sheetMusicComponent} mb-5 `}>
      <div
        className={`${styles?.sheetMusicContents}`}
      >
        <Card
        >
          <CardHeader>{"파일을 추가"}</CardHeader>
          <CardBody
            className={`${styles?.sheetMusicImgCard}`}
          >
            {"+"}
          </CardBody>
          <CardFooter>{"해주세요"}</CardFooter>
        </Card>
      </div>
      {sheetMusics?.map((sheetMusic, index) => (
        <div
          key={index}
          className={`${styles?.sheetMusicContents}`}
        >
          <Card
            onClick={() => onClickView(sheetMusic, index)}
          >
            <CardHeader>{sheetMusic?.title}</CardHeader>
            <img
              alt="Card"
              className={`${styles?.sheetMusicImgCard}`}
              src={sheetMusic?.img}
            />
            <CardFooter>{sheetMusic?.upLoadDate}</CardFooter>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default MyPageSheetMusicListComponent;
