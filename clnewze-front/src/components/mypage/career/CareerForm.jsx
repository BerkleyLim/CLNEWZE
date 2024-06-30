import React, { useState } from "react";
import { Box, TextField, Typography, Button, IconButton, InputAdornment } from "@mui/material";
import { CloudUpload as CloudUploadIcon, Link as LinkIcon } from "@mui/icons-material";

const CareerForm = () => {
  const [profile, setProfile] = useState({
    introduction: "",
    specialty: "",
    experience: "",
    education: "",
    totalExperience: "",
    portfolioFile: null,
    portfolioLink: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleFileChange = (e) => {
    setProfile({ ...profile, portfolioFile: e.target.files[0] });
  };

  return (
    <Box className="p-4">
      <Typography variant="h4" className="mb-4">
        프로필 정보
      </Typography>
      <Box className="mb-4">
        <Typography variant="h6">소개</Typography>
        <TextField
          fullWidth
          multiline
          minRows={3}
          placeholder="안녕하세요. 저는 여러분의 미래를 책임질 홍길동 입니다."
          name="introduction"
          value={profile.introduction}
          onChange={handleChange}
          variant="outlined"
          className="mb-4"
        />
      </Box>
      <Box className="mb-4">
        <Typography variant="h6">전문분야</Typography>
        <TextField
          fullWidth
          placeholder="클래식 피아노 / 실용음악 성우 / 성악가 등 작성"
          name="specialty"
          value={profile.specialty}
          onChange={handleChange}
          variant="outlined"
          className="mb-4"
        />
      </Box>
      <Box className="mb-4">
        <Typography variant="h6">경력사항</Typography>
        <TextField
          fullWidth
          multiline
          minRows={3}
          placeholder="서울 예술의 전당에서 진행하는 콩쿠르 대회 우승"
          name="experience"
          value={profile.experience}
          onChange={handleChange}
          variant="outlined"
          className="mb-4"
        />
      </Box>
      <Box className="mb-4">
        <Typography variant="h6">학력 / 전공</Typography>
        <TextField
          fullWidth
          placeholder="본인이 학력 및 전공에 대해 추가해주세요"
          name="education"
          value={profile.education}
          onChange={handleChange}
          variant="outlined"
          className="mb-4"
        />
      </Box>
      <Box className="mb-4">
        <Typography variant="h6">총 경력</Typography>
        <TextField
          fullWidth
          placeholder="5년"
          name="totalExperience"
          value={profile.totalExperience}
          onChange={handleChange}
          variant="outlined"
          className="mb-4"
        />
      </Box>
      <Box className="mb-4">
        <Typography variant="h6">포트폴리오</Typography>
        <Box className="flex items-center space-x-4">
          <Button
            variant="contained"
            component="label"
            startIcon={<CloudUploadIcon />}
          >
            파일 업로드
            <input
              type="file"
              hidden
              onChange={handleFileChange}
            />
          </Button>
          {profile.portfolioFile && (
            <Typography variant="body1">{profile.portfolioFile.name}</Typography>
          )}
        </Box>
        <Box className="mt-4">
          <TextField
            fullWidth
            placeholder="링크를 입력하세요"
            name="portfolioLink"
            value={profile.portfolioLink}
            onChange={handleChange}
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LinkIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default CareerForm;
