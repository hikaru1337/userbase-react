const UserCardProfession = ({ profession }) => {
  const trimmedProfession = profession?.trim();

  return <p className={!trimmedProfession ? `h-[20px] w-[100px] bg-stone-200 rounded-xl` : `text-base font-gothamprolight`}>{profession}</p>;
};

export default UserCardProfession;