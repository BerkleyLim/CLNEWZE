import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: 'recoil-persist', // this key is using to store data in local storage
  storage: sessionStorage, // configure which storage will be used to store the data
  converter: JSON // configure how values will be serialized/deserialized in storage
});

// const InitState = {
//   bno:undefined,
//   startDate:undefined,
//   endDate:undefined,
//   detail:undefined,
// };

export const foodState = atom({
  key: 'user',
  default: [],
  effects_UNSTABLE: [persistAtom]
});

