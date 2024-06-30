import React, { useState } from "react";
import { Link as LinkIcon, InsertDriveFile as FileIcon } from "@mui/icons-material";

const CareerView = () => {
  const [profile, setProfile] = useState({});
  return (
    <div className="py-2">
      <h4 className="text-left mb-4 font-bold text-3xl">프로필 정보</h4>
      <div className="p-4 mb-6 shadow-lg rounded bg-white">
        <h6 className="text-xl font-semibold mb-2">소개</h6>
        <p className="mb-4">
          {profile.introduction || "안녕하세요. 저는 여러분의 미래를 책임질 홍길동 입니다."}
        </p>

        <h6 className="text-xl font-semibold mb-2">전문분야</h6>
        <p className="mb-4">
          {profile.specialty || "클래식 피아노 / 실용음악 성우 / 성악가 등 작성"}
        </p>

        <h6 className="text-xl font-semibold mb-2">경력사항</h6>
        <p className="mb-4">
          {profile.experience || "서울 예술의 전당에서 진행하는 콩쿠르 대회 우승"}
        </p>

        <h6 className="text-xl font-semibold mb-2">학력 / 전공</h6>
        <p className="mb-4">
          {profile.education || "본인이 학력 및 전공에 대해 추가해주세요"}
        </p>

        <h6 className="text-xl font-semibold mb-2">총 경력</h6>
        <p className="mb-4">
          {profile.totalExperience || "5년"}
        </p>

        <h6 className="text-xl font-semibold mb-2">포트폴리오</h6>
        <div className="flex items-center space-x-2 mb-4">
          {profile.portfolioFile && (
            <div className="flex items-center space-x-1">
              <FileIcon />
              <p>{profile.portfolioFile.name}</p>
            </div>
          )}
        </div>
        {profile.portfolioLink && (
          <div className="flex items-center space-x-1">
            <LinkIcon />
            <p>
              <a href={profile.portfolioLink} target="_blank" rel="noopener noreferrer">
                {profile.portfolioLink}
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CareerView;
