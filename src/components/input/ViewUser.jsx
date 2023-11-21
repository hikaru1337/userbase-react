import UserCard from "../UI/UserCard/UserCard";

const ViewUser = (props) => {


  return (
    <div>
      <div className="text-center mb-3 text-stone-800 font-gothampromedium">
        Карточка пользователя
      </div>
      <UserCard
        photo={props.photo}
        firstName={props.firstName}
        secondName={props.secondName}
        birthDate={props.birthDate}
        profession={props.profession}
        aboutMe={props.aboutMe}
        staticMode={true}
      />
    </div>
  );
};

export default ViewUser;
