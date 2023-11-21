const UserCardProfession = (props) => {
  return <p className={`text-base font-gothamprolight ${props.profession ?? `h-[20px] w-[100px] bg-stone-200 rounded-xl`}`}>{props.profession}</p>;
};

export default UserCardProfession;
