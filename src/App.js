import "./App.css";
import UserList from "./components/UI/UserList/UserList";
import InputUser from "./components/input/InputUser";
import ViewUser from "./components/input/ViewUser";
import { useState } from "react";

function App() {

  const userList = [
    {
      id: 0,
      Photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png",
      FirstName: "Икс",
      SecondName: "Пососу",
      Born: "2001-05-05",
      Profession: "Программист",
      AboutMe: "Я React и C# разработчик. Изучаю TailWindcss, в будущем хочу изучать Next.js и Nest.js"
    },
    {
      id: 1,
      Photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png",
      FirstName: "Икс",
      SecondName: "Пососу",
      Born: "2001-05-05",
      Profession: "Программист",
      AboutMe: "Я React и C# разработчик. Изучаю TailWindcss, в будущем хочу изучать Next.js и Nest.js"
    },
    {
      id: 2,
      Photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png",
      FirstName: "Икс",
      SecondName: "Пососу",
      Born: "2001-05-05",
      Profession: "Программист",
      AboutMe: "Я React и C# разработчик. Изучаю TailWindcss, в будущем хочу изучать Next.js и Nest.js"
    },
  ]

  const [item, setItem] = useState(userList)

  const UserAddHandler = (e) => {
    const newItem = {
      id: item.length,
      Photo: photo,
      FirstName:firstName,
      SecondName:secondName,
      Born:birthDate,
      Profession:profession,
      AboutMe:aboutMe
    }

    setItem(prev => [newItem, ...prev])
    setPhoto(null);
    setFirstName(null);
    setSecondName(null);
    setBirthDate(null);
    setProfession(null);
    setAboutMe(null);
  }


  const [photo, setPhoto] = useState(null);

  const [firstName, setFirstName] = useState(null);
  const [secondName, setSecondName] = useState(null);
  const [birthDate, setBirthDate] = useState(null);
  const [profession, setProfession] = useState(null);
  const [aboutMe, setAboutMe] = useState(null);

  return (
    <div className="w-[730px] m-auto ">
      <p className="text-4xl py-5 text-stone-800 font-gothamprobold">
        Userbase
      </p>
      <div className="flex justify-evenly mb-10">
        <InputUser
          ImportPhotoHandler={setPhoto}
          InputFirstNameHandler={setFirstName}
          InputSecondNameHandler={setSecondName}
          InputBirthDateHandler={setBirthDate}
          InputProfessionHandler={setProfession}
          InputAboutMeHandler={setAboutMe}
          UserAddHandler={UserAddHandler}
        />
        <ViewUser
          photo={photo}
          firstName={firstName}
          secondName={secondName}
          birthDate={birthDate}
          profession={profession}
          aboutMe={aboutMe}
        />
      </div>

      <div className="flex flex-wrap justify-between mb-10">
        <UserList item={item}/>
      </div>
    </div>
  );
}

export default App;
