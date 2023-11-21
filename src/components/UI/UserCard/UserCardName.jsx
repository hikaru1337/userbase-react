const UserCardName = (props) => {
  let firstName = props.firstName?.trim();
  let secondName = props.secondName?.trim();


  if(firstName == undefined)
    firstName = "";

  if(secondName == undefined)
  secondName = "";
    
  return (
    <div className="">
      <p className={`text-3xl mb-[2px] leading-none ${(firstName === "" && secondName === "") ? `bg-stone-200 rounded-xl w-[200px] h-[35px]` : ` `}`}>
      {firstName} {secondName}
    </p>
    </div>
    
  );
};

export default UserCardName;
