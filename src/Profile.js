import { useState } from "react";
import { users } from "./users";
import { Friend } from "./App";

export function Profile() {
  const [isOpenProfile, setIsOpenProfile] = useState(true);
  const [currOpen, setCurrOpen] = useState("friends");

  function handleSwitchOfPage(name) {
    setCurrOpen(name);
  }

  return (
    <>
      {isOpenProfile ? (
        <div className="profileDiv">
          <div className="image">
            <img src={require("./avatar.jpg")} alt="testIMG" />
          </div>
          <div className="info">
            {currOpen === "friends" ? (
              users.map((i) => <Friend name={i.name} img={i.img} />)
            ) : currOpen === "profile" ? (
              <Postst />
            ) : (
              <Adding />
            )}
          </div>
          <div className="actions">
            <ActionPanel handleChange={handleSwitchOfPage} name={"adding"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="bi bi-person-fill-add"
                viewBox="0 0 16 16"
              >
                <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path d="M2 13c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Z" />
              </svg>

              <h2>Dodaj znajomego</h2>
            </ActionPanel>
            <ActionPanel handleChange={handleSwitchOfPage} name={"profile"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="bi bi-info-square-fill"
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
                class="bi bi-people-fill"
                viewBox="0 0 16 16"
              >
                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
              </svg>
              <h2>Lista znajomych</h2>
            </ActionPanel>
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
function Postst() {
  return <h1>TEST</h1>;
}
function ActionPanel({ children, handleChange, name }) {
  return (
    <div className="actionPanel" onClick={() => handleChange(name)}>
      {children}
    </div>
  );
}
function Adding() {
  return <h1>TEST ADDING</h1>;
}
