import "./App.css";
import UserList from "./components/UI/UserList/UserList";
import UserModal from "./components/UI/UserModal/UserModal";
import InputUser from "./components/input/InputUser";
import ViewUser from "./components/input/ViewUser";
import { dateConverter } from "./components/service/DateConvert";
import { useState } from "react";

const items = [
  {
    id: 0,
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png",
    firstName: "Икс",
    secondName: "Пососу",
    birthDate: "2001-05-05",
    profession: "Программист",
    aboutMe: "Я React и C# разработчик. Изучаю TailWindcss, в будущем хочу изучать Next.js и Nest.js",
  },
  {
    id: 1,
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png",
    firstName: "Икс",
    secondName: "Пососу",
    birthDate: "2001-05-05",
    profession: "Программист",
    aboutMe: "Я React и C# разработчик. Изучаю TailWindcss, в будущем хочу изучать Next.js и Nest.js",
  },
  {
    id: 2,
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png",
    firstName: "Икс",
    secondName: "Пососу",
    birthDate: "2001-05-05",
    profession: "Программист",
    aboutMe: "Я React и C# разработчик. Изучаю TailWindcss, в будущем хочу изучать Next.js и Nest.js",
  },
];

const defaultUser = {
  id: 0,
  photo: "",
  firstName: "",
  secondName: "",
  birthDate: dateConverter(new Date()),
  profession: "",
  aboutMe: "",
};

function App() {
  const [user, setUser] = useState(defaultUser);
  const [userList, setUserList] = useState(items);
  const [openModal, setOpenModal] = useState(null);

  const UserAddHandler = () => {
    const newItem = {
      id: userList.length,
      photo: user.photo,
      firstName: user.firstName,
      secondName: user.secondName,
      birthDate: user.birthDate,
      profession: user.profession,
      aboutMe: user.aboutMe,
    };

    setUserList((prev) => [newItem, ...prev]);
    setUser(defaultUser);
  };

  const onOpenModalUserHandler = (id) => {
    const GetModalUser = userList.find((x) => x.id === id);
    setOpenModal(GetModalUser);
  };

  const updateUserInfo = (field, value) => {
    setUser((prevUser) => ({
      ...prevUser,
      [field]: value,
    }));
  };

  return (
    <>
      {openModal && <UserModal openModal={openModal} setOpenModal={setOpenModal} />}

    <div className="w-[730px] m-auto overflow-hidden">
      <p className="text-4xl py-5 text-stone-800 font-gothamprobold">
        Userbase
      </p>
      <div className="flex justify-evenly mb-10">
        <InputUser InputUserUpdate={updateUserInfo} user={user} UserAddHandler={UserAddHandler}/>
        <ViewUser user={user}/>
      </div>

      <div className="flex flex-wrap justify-between mb-10">
        <UserList userList={userList} onOpenModalUserHandler={onOpenModalUserHandler} />
      </div>
    </div>
  </>
  );
}

export default App;