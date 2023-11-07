import { useEffect, useState } from "react";
import { users } from "./users";

import { children } from "react";
import { Friend } from "./FRIEND_COMP/Friend";
import { ActionPanel } from "./ACTION_COMP/ActionPanel";
import { Post } from "./POST_COMP/Post";
// import "./App.css";

export function Profile() {
  const [isOpenProfile, setIsOpenProfile] = useState(true);
  const [currOpen, setCurrOpen] = useState("friends");
  const [currUser, setCurrUser] = useState(1);
  const userProfile = users.filter((item) => item.id === currUser)[0];

  function handleSwitchOfPage(name) {
    setCurrOpen(name);
  }
  function handleSwitchUser(id) {
    setCurrUser(id);
  }

  return (
    <>
      {isOpenProfile ? (
        <div className="profileDiv">
          <div className="image">
            <img src={userProfile.img} alt="avatarImg" />
          </div>

          <div className="actions">
            <h1>{userProfile.name}</h1>

            <ActionPanel handleChange={handleSwitchOfPage} name={"profile"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.93 4.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
              </svg>

              <h2>Profil</h2>
            </ActionPanel>
            <ActionPanel handleChange={handleSwitchOfPage} name={"friends"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
              </svg>
              <h2>Lista znajomych</h2>
            </ActionPanel>
          </div>
          <div className="info">
            {currOpen === "friends"
              ? userProfile.friends.map((i) => (
                  <Friend
                    person={users[i - 1]}
                    key={users[i - 1].id}
                    onUserChange={handleSwitchUser}
                  />
                ))
              : userProfile.posty.map((i) => (
                  <Post img={i.img}>{i.post} </Post>
                ))}
          </div>
        </div>
      ) : (
        <div className="profileDivHidden">
          <a href="#" onClick={() => setIsOpenProfile(!isOpenProfile)}>
            <h1>@kotinerus</h1>
          </a>
        </div>
      )}
    </>
  );
}
