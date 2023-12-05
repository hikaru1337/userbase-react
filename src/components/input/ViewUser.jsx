import UserCard from "../UI/UserCard/UserCard";
import React from "react";
import TitleBlock from "./TitleBlock";

const ViewUser = ({ user }) => {
  return (
    <TitleBlock title={"Карточка пользователя"}>
      <UserCard user={user} staticMode />
    </TitleBlock>
  );
};

export default ViewUser;


/*
<div>
      <div className="text-center mb-3 text-stone-800 font-gothampromedium">
        Карточка пользователя
      </div>
      <UserCard user={user} staticMode />
    </div>

*/