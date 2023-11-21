const UserCardPhoto = (props) => {
  return (
    <div className={`w-[96px] h-[96px] aspect-square bg-stone-200 rounded-full`}>
      <img
        className="rounded-full object-cover"
        src={props.photo}
      />
    </div>
  );
};

export default UserCardPhoto;

/*

<div className={`${props.photo ? `w-full h-full` : `w-[96px] h-[96px]`} max-w-[96px] bg-stone-200 rounded-full flex items-center`}>
      <img
        className="rounded-full object-cover"
        src={props.photo}
      />
    </div>

*/
