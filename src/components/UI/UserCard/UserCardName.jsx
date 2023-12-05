const UserCardName = ({ firstName, secondName }) => {
  const trimmedFirstName = firstName?.trim();
  const trimmedSecondName = secondName?.trim();
  const success = !(trimmedFirstName || trimmedSecondName);

  return (
    <div>
      <p className={`text-3xl mb-[2px] leading-none ${success ? `bg-stone-200 rounded-xl w-[200px] h-[35px]` : ''}`}>
        {trimmedFirstName} {trimmedSecondName}
      </p>
    </div>
  );
};

export default UserCardName;
