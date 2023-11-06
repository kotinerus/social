import { children } from "react";
import "./App.css";
import { Profile } from "./Profile";

export default function App() {
  return (
    <>
      <Profile />
    </>
  );
}

export function Friend({ name, img }) {
  // console.log(person.name);
  return (
    <div className="friendPanel">
      <div className="row">
        <div>
          <img src={img} />
        </div>
        <div>
          <h2>{name}</h2>
        </div>
      </div>
    </div>
  );
}
