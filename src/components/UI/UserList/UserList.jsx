import UserCard from "../UserCard/UserCard";

const UserList = (props) => {
  return (
    <div className="flex flex-wrap gap-y-8 justify-between">
      {props.userList.map((user) => (
        <UserCard
          onOpenModalUserHandler={props.onOpenModalUserHandler}
          key={user.id}
          user={user}
        />
      ))}
    </div>
  );
};

export default UserList;
