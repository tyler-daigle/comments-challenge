import { createContext, useState, useEffect } from "react";
// import { SERVER_URL, SERVER_PORT } from "./config";
import commentsData from "./temp_data/data.json";

export const userContext = createContext({
  username: "",
  image: "",
});

export default function UserContext({ children }) {
  const [user, setUser] = useState({
    username: "",
    image: "",
    votes: [],
  });
  console.log(user);

  // using JSON file rather than server for now
  useEffect(() => {
    const { currentUser } = commentsData;
    setUser({
      dialogOpen: false,
      username: currentUser.username,
      image: currentUser.image.png,
    });
  }, []);
  // useEffect(() => {
  //   // fake login
  //   const loginUser = async () => {
  //     try {
  //       const res = await fetch(`${SERVER_URL}:${SERVER_PORT}/currentuser`);
  //       const userJson = await res.json();
  //       const image = userJson.image.png;
  //       const username = userJson.username;
  //       setUser({
  //         dialogOpen: false,
  //         username,
  //         image,
  //       });
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };
  //   loginUser();
  // }, []);

  return <userContext.Provider value={user}>{children}</userContext.Provider>;
}
