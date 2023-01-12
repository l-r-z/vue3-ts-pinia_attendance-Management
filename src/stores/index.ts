import checksStore from './module/checks';
import newsStore from './module/news';
import signsStore from './module/signs';
import usersStrore from './module/users';

export const useStore = () => {
  return {
    checksStore: checksStore(),
    newsStore: newsStore(),
    signsStore: signsStore(),
    usersStrore: usersStrore(),
  };
};

// export const sum = () => {
//   console.log(555);
// };
// export default {
//   useStore,
// };
