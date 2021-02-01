import { createBrowserHistory } from "history";
import { Auth } from "aws-amplify";

const history = createBrowserHistory();

history.listen((location) => {
  Auth.currentSession()
    .then(() => {
      if (location.pathname === "/auth") {
        history.push("/");
      }
    })
    .catch(() => {
      if (location.pathname !== "/auth") {
        history.push("/auth");
      }
    }).catch(console.log);
});

export default history;
