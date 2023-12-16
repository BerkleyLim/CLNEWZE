import { useRecoilState } from 'recoil';
import { myPageHeaderSubScriptModalIsOpenState } from '../recoil/state/myPageHeaderState';

const MyPageHeaderContainer = () => {
  // state 
  const [isSubScriptModal, setIsSubScriptModal] = useRecoilState(myPageHeaderSubScriptModalIsOpenState);

  // modal 열기 닫기
  const subscriptModalToggle = () => setIsSubScriptModal(!isSubScriptModal);

  return {subscriptModalToggle}
}

export default MyPageHeaderContainer