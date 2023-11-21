import EntryField from "./EntryField";

const InputUser = (props) => {
  const InputList = [
    {
      iconType: "0",
      id: "FirstName",
      title: "Имя",
      placeholder: "Введите имя",
      length: 12,
      inputType: "text",
    },
    {
      iconType: "1",
      id: "SecondName",
      title: "Фамилия",
      placeholder: "Введите фамилию",
      length: 12,
      inputType: "text",
    },
    {
      iconType: "2",
      id: "BirthDate",
      title: "День рождения",
      placeholder: "",
      length: 16,
      inputType: "date",
    },
    {
      iconType: "3",
      id: "Profession",
      title: "Профессия",
      placeholder: "Кем работаете?",
      length: 32,
      inputType: "text",
    },
    {
      iconType: "4",
      id: "Aboutme",
      title: "О себе",
      placeholder: "Чем увлекаетесь? :)",
      length: 150,
      inputType: "text",
    },
    {
      iconType: "5",
      id: "Photo",
      title: "Фотография",
      placeholder: "",
      length: 0,
      inputType: "file",
    },
  ];

  return (
    <div>
      <div className="text-center mb-3 text-stone-800 font-gothampromedium">
        Добавить пользователя
      </div>
      <div className="bg-white rounded-xl px-3 py-3 w-[300px] mb-5">
        <div className="flex flex-col">
          {InputList.map((item, index) => (
            <EntryField
              id={item.id}
              key={index}
              iconType={item.iconType}
              title={item.title}
              placeholder={item.placeholder}
              length={item.length}
              inputType={item.inputType}

              ImportPhotoHandler={props.ImportPhotoHandler}
              InputFirstNameHandler={props.InputFirstNameHandler}
              InputSecondNameHandler={props.InputSecondNameHandler}
              InputBirthDateHandler={props.InputBirthDateHandler}
              InputProfessionHandler={props.InputProfessionHandler}
              InputAboutMeHandler={props.InputAboutMeHandler}
            />
          ))}
        </div>
      </div>
      <button
        onClick={props.UserAddHandler}
        className="bg-indigo-400 rounded-xl w-full font-gothampromedium h-10 text-white transition-all hover:scale-105"
      >
        Добавить
      </button>
    </div>
  );
};

export default InputUser;
