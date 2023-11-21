import UserCardAboutMe from "./UserCardAboutMe";
import UserCardName from "./UserCardName";
import UserCardBirthDate from "./UserCardBirthDate";
import UserCardPhoto from "./UserCardPhoto";
import UserCardProfession from "./UserCardProfession";

const UserCard = (props) => {
  return (
    <div className={`bg-white rounded-xl p-3 w-[350px] h-min ${props.staticMode || `hover:cursor-pointer h-[201px]`}`}>
        <div className="flex flex-col gap-y-3">
          <div className="flex gap-x-3 font-gothampromedium overflow-hidden">
            <UserCardPhoto photo={props.photo}/>
            <div className="flex flex-col justify-between text-stone-700">
              <div>
                <UserCardName firstName={props.firstName} secondName={props.secondName}/>
                <UserCardBirthDate birthDate={props.birthDate}/>
              </div>
              <UserCardProfession profession={props.profession}/>
            </div>
          </div>
          <UserCardAboutMe aboutMe={props.aboutMe} staticMode={props.staticMode}/>
        </div>
      </div>
  );
};

export default UserCard;
