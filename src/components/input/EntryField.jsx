import ImportIcon from "./ImportIcon";

const EntryField = (props) => {


  const InputDataHandler = (e) => {
    const value = e.target.value;

    const id = e.target.id;
      switch (id) {
        case "FirstName":
          props.InputFirstNameHandler(value);
          break;
        case "SecondName":
          props.InputSecondNameHandler(value);
          break;
        case "BirthDate":
          props.InputBirthDateHandler(value);
          break;
        case "Profession":
          props.InputProfessionHandler(value);
          break;
        case "Aboutme":
          props.InputAboutMeHandler(value);
          break;
        case "Photo":
          const file = e.target.files[0];

          if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
              props.ImportPhotoHandler(reader.result);
            };
            reader.readAsDataURL(file);
          }
          break;
      }
  };

  return (
    <div className="[&:not(:last-child)]:mb-3">
      <p className="text-stone-500 font-gothampromedium">{props.title}</p>
      <div className="flex items-center w-full rounded-md h-10 pl-1 bg-stone-100">
        <ImportIcon Type={props.iconType} />
        <input
              id={props.id}
              type={props.inputType}
              maxLength={props.length}
              placeholder={props.placeholder}
              className={`placeholder-stone-400 text-stone-700 outline-none bg-transparent w-10/12 font-gothampromedium file:bg-indigo-400 file:border-none file:text-white file:font-gothampromedium file:rounded-md file:hover:cursor-pointer`}
              onChange={InputDataHandler}
            />
      </div>
    </div>
  );
};

export default EntryField;
