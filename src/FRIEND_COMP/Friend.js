import "./FriendStyle.css";
export function Friend({ person, onUserChange }) {
  return (
    <div className="friendPanel" onClick={() => onUserChange(person.id)}>
      <div className="imgDiv">
        <img src={person.img} />
      </div>
      <div>
        <h2>{person.name}</h2>
      </div>
    </div>
  );
}
