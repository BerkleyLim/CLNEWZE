import React, { useState } from "react";
import UserContainer from "../../../../hooks/UserContainer";

const UserLoginForm = ({ setIsView }) => {
  const [inputs, setInputs] = useState({});
  const { handlerMyPageLogin } = UserContainer();

  // 입력
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  // 로그인 시 상태 전환시켜주기
  const toggleUserView = async () => {
    const isUserView = await handlerMyPageLogin(inputs);
    setIsView(isUserView);
  };

  return (
    <div className="w-1/2 mx-auto p-4">
      <h4 className="text-center text-2xl mb-4">로그인</h4>
      <div className="py-3 flex flex-row items-center">
        <label className="w-1/5">ID</label>
        <input
          className="w-4/5 p-2 border border-gray-300 rounded"
          name="id"
          type="text"
          onChange={onChange}
        />
      </div>
      <div className="py-3 flex flex-row items-center">
        <label className="w-1/5">PW</label>
        <input
          className="w-4/5 p-2 border border-gray-300 rounded"
          name="password"
          type="password"
          onChange={onChange}
        />
      </div>
      <div className="py-3 flex justify-center">
        <button
          className="w-1/2 p-2 bg-gray-200 border border-gray-300 rounded text-lg"
          onClick={toggleUserView}
        >
          확인
        </button>
      </div>
    </div>
  );
};

export default UserLoginForm;
