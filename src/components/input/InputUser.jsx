import Button from "../UI/Button/Button";
import EntryField from "./EntryField";
import { dateConverter } from "../service/DateConvert";
import TitleBlock from "./TitleBlock";
import { useEffect, useState, useRef } from "react";

const InputUser = ({user, UserAddHandler, InputUserUpdate}) => {

  const [formIsValid, setFormIsValid] = useState(false);
  const photoInputRef = useRef(null);
  const [photoInputDeleteVisible, setPhotoInputDeleteVisible] = useState(false);

  useEffect(() => {

    if(user.photo)
    {
      setPhotoInputDeleteVisible(true)
    }
    else
      setPhotoInputDeleteVisible(false);

    if (
      user.firstName &&
      user.secondName &&
      user.profession &&
      user.aboutMe &&
      user.photo &&
      user.birthDate != dateConverter(new Date())
    ) {
      setFormIsValid(true);
    }
    else
      setFormIsValid(false);

  },[user.firstName, user.secondName, user.profession, user.aboutMe, user.photo, user.birthDate])

  const handleSubmit = (event) => {
    UserAddHandler();
    PhotoDeleteHandler();
    event.preventDefault();
  };

  const handleChange = (event) => {
    const Type = event.target.id;
    const files = event.target?.files;

    if (files?.length && Type === "photo") {
      const reader = new FileReader();
      reader.onloadend = () => {
        InputUserUpdate(Type, reader.result);
      };
      reader.readAsDataURL(files[0]);
    } 
    else 
      InputUserUpdate(Type, event.target.value);
  };

  const PhotoDeleteHandler = () => {
    photoInputRef.current.value = null;
    InputUserUpdate("photo", "");
  }

  const currentDate = new Date();
  const modifiedDate = new Date(
    new Date().setFullYear(currentDate.getFullYear() - 100)
  );

  const maxDateValue = dateConverter(currentDate);
  const minDateValue = dateConverter(modifiedDate);

  const classNameInput = `placeholder-stone-400 text-stone-700 outline-none bg-transparent w-10/12 font-gothampromedium `;
  const classNameFile = `file:bg-indigo-400 file:border-none file:text-white file:font-gothampromedium file:rounded-md file:hover:cursor-pointer`;

  return (
    <TitleBlock title={"Добавить пользователя"}>
      <div className="bg-white rounded-xl px-3 py-3 w-[300px]">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <EntryField iconType={"0"} title="Имя">
              <input
                type="text"
                id="firstName"
                maxLength={10}
                value={user.firstName}
                onChange={handleChange}
                placeholder="Введите имя"
                className={classNameInput}
              />
            </EntryField>

            <EntryField iconType={"1"} title="Фамилия">
              <input
                type="text"
                maxLength={10}
                id="secondName"
                value={user.secondName}
                onChange={handleChange}
                placeholder="Введите фамилию"
                className={classNameInput}
              />
            </EntryField>

            <EntryField iconType={"2"} title="День рождения">
              <input
                type="date"
                id="birthDate"
                onChange={handleChange}
                className={classNameInput}
                value={user.birthDate}
                min={minDateValue}
                max={maxDateValue}
              />
            </EntryField>

            <EntryField iconType={"3"} title="Профессия">
              <input
                type="text"
                maxLength={32}
                id="profession"
                value={user.profession}
                onChange={handleChange}
                placeholder="Кем работаете?"
                className={classNameInput}
              />
            </EntryField>

            <EntryField iconType={"4"} title="О себе">
              <input
                type="text"
                maxLength={150}
                id="aboutMe"
                value={user.aboutMe}
                onChange={handleChange}
                placeholder="Чем увлекаетесь? :)"
                className={classNameInput}
              />
            </EntryField>

            <EntryField iconType={""} title="Фотография">
              <input // value={props.user.photo} - input file and complex useState is illegle
                type="file"
                id="photo"
                accept="image/*"
                onChange={handleChange}
                className={`file:bg-indigo-400 file:border-none file:text-white file:font-gothampromedium file:rounded-md  file:hover:cursor-pointer`}
                ref={photoInputRef}
                
              />
              <button onClick={PhotoDeleteHandler} type="button" title="Удалить фото" hidden={!photoInputDeleteVisible} className="mr-3 bg-rose-400 text-white rounded-md px-2">X</button>
            </EntryField>

            <Button type="submit" disabled={!formIsValid} text="Добавить" />
          </div>
        </form>
        
      </div>
    </TitleBlock>
  );
};

export default InputUser;

/*

{InputList.map((item, index) => (
            <EntryField
              id={item.id}
              key={index}
              iconType={item.iconType}
              title={item.title}
              placeholder={item.placeholder}
              length={item.length}
              inputType={item.inputType}

              InputUserUpdate={props.InputUserUpdate}
            />
          ))}
*/
