import UserCardAboutMe from "./UserCardAboutMe";
import UserCardName from "./UserCardName";
import UserCardBirthDate from "./UserCardBirthDate";
import UserCardPhoto from "./UserCardPhoto";
import UserCardProfession from "./UserCardProfession";

const UserCard = (props) => {

  const onOpenModalUserHandler = () => {
    if(props?.staticMode !== true)
      props.onOpenModalUserHandler(props.user.id)
  }

  return (
    <div className={props.className}>
      <div onClick={onOpenModalUserHandler} className={`bg-white rounded-xl p-3 w-[350px] h-min ${props.staticMode || `hover:cursor-pointer h-[201px]`}`}>
        <div className="flex flex-col gap-y-3">
          <div className="flex gap-x-3 font-gothampromedium overflow-hidden">
            <UserCardPhoto photo={props.user.photo} />
            <div className="flex flex-col justify-between text-stone-700">
              <div>
                <UserCardName
                  firstName={props.user.firstName}
                  secondName={props.user.secondName}
                />
                <UserCardBirthDate birthDate={props.user.birthDate} staticMode={props.staticMode} />
              </div>
              <UserCardProfession profession={props.user.profession} />
            </div>
          </div>
          <UserCardAboutMe
            aboutMe={props.user.aboutMe}
            staticMode={props.staticMode}
          />
        </div>
      </div>
    </div>
  );
};

export default UserCard;
