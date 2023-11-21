import UserCard from "../UserCard/UserCard";

const UserList = (props) => {
  return (
    <div className="flex flex-wrap gap-y-8 justify-between">
      {props.item.map((item) => (
        <UserCard key={item.id} photo={item.Photo} firstName={item.FirstName} secondName={item.SecondName} birthDate={item.Born} profession={item.Profession} aboutMe={item.AboutMe} />
      ))}
    </div>
  );
};

export default UserList;
