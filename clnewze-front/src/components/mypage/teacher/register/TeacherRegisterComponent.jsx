import React from "react";

const TeacherRegister = () => {
  return (
    <div className="p-6">
      <h4 className="text-left mb-4 font-bold text-3xl">선생님 등록 안내</h4>
      <form>
        <div className="mb-4">
          <div className="flex flex-col md:flex-row md:items-center mb-4">
            <label className="w-full md:w-1/5 text-xl font-semibold">이름</label>
            <input
              className="w-full md:w-4/5 p-2 border border-gray-300 rounded"
              name="name"
              placeholder="이름을 입력하세요."
            />
          </div>
          <div className="flex flex-col md:flex-row md:items-center mb-4">
            <label className="w-full md:w-1/5 text-xl font-semibold">소개</label>
            <textarea
              className="w-full md:w-4/5 p-2 border border-gray-300 rounded"
              name="introduction"
              placeholder="소개를 입력하세요."
              rows={4}
            />
          </div>
          <div className="flex flex-col md:flex-row md:items-center mb-4">
            <label className="w-full md:w-1/5 text-xl font-semibold">전문분야</label>
            <input
              className="w-full md:w-4/5 p-2 border border-gray-300 rounded"
              name="major"
              placeholder="전문분야를 입력하세요."
            />
          </div>
          <div className="flex flex-col md:flex-row md:items-center mb-4">
            <label className="w-full md:w-1/5 text-xl font-semibold">경력</label>
            <input
              className="w-full md:w-4/5 p-2 border border-gray-300 rounded"
              name="experience"
              placeholder="경력을 입력하세요."
            />
          </div>
          <div className="flex flex-col md:flex-row md:items-center mb-4">
            <label className="w-full md:w-1/5 text-xl font-semibold">활동지역</label>
            <input
              className="w-full md:w-4/5 p-2 border border-gray-300 rounded"
              name="area"
              placeholder="활동 지역을 입력하세요."
            />
          </div>
          <div className="flex flex-col md:flex-row md:items-center mb-4">
            <label className="w-full md:w-1/5 text-xl font-semibold">포트폴리오 첨부</label>
            <div className="w-full md:w-4/5">
              <label className="block border border-gray-300 rounded p-2 cursor-pointer">
                파일 선택
                <input
                  type="file"
                  hidden
                  name="file"
                />
              </label>
            </div>
          </div>
          <div className="flex justify-center">
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
              제출
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TeacherRegister;
