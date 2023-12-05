import { formatDateToRu } from "../../service/FormatDateToRu";

const UserCardOld = (props) => {
  const dateInput = new Date(props.birthDate);
  const dateNow = new Date();

  const yearInput = dateInput.getFullYear();
  const yearNow = dateNow.getFullYear();

  const UserOld = yearNow - yearInput;

  const inputFullDateString = dateInput.toDateString();
  const nowFullDateString = dateNow.toDateString();

  const formatAge = (age) => {
    if(props.staticMode) {
      return `${age} ${getYearsWord(age)} (${formatDateToRu(dateInput)})`;
    }

    if (age >= 1) {
      return `${age} ${getYearsWord(age)}`;
    } else if (age === 0) {
      return "Младенец";
    } else {
      return "Некорректный возраст";
    }
  };
  
  const getYearsWord = (years) => {
    const lastDigit = years % 10;
    const lastTwoDigits = years % 100;
  
    if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
      return "лет";
    } else if (lastDigit === 1) {
      return "год";
    } else if (lastDigit >= 2 && lastDigit <= 4) {
      return "года";
    } else {
      return "лет";
    }
  };

  return (
    <>
      {inputFullDateString === nowFullDateString ? 
        <div className={`h-[20px] w-[100px] mt-1 bg-stone-200 rounded-xl`}></div>
       : 
        <p className={`text-base font-gothamprolight`}>{formatAge(UserOld)}</p>
      }
    </>
  );
};

export default UserCardOld;
