const UserCardOld = (props) => {
  const YearDate = new Date(props.birthDate).getFullYear();
  const YearNow = new Date().getFullYear();
  const UserOld = YearNow - YearDate;
  const UserDateYear = YearNow - UserOld;
  return (
    <>
      {UserDateYear === 1970 || UserDateYear == null ? (
        <div
          className={`h-[20px] w-[100px] mt-1 bg-stone-200 rounded-xl`}>
          </div>
      ) : (
        <p className={`text-base font-gothamprolight`}>
          {UserOld} лет ({UserDateYear} Год.)
        </p>
      )}
    </>
  );
};

export default UserCardOld;
