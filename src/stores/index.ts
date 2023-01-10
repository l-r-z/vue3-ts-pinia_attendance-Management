import checksStore from "./module/checks";
import newsStore from "./module/news";
import signsStore from "./module/signs";
import usersStrore from "./module/users";

export default () => {
  return {
    checks: checksStore(),
    news: newsStore(),
    sings: signsStore(),
    users: usersStrore(),
  };
};
