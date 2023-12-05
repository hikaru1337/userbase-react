import { useEffect } from "react";
import Button from "../Button/Button";
import UserCard from "../UserCard/UserCard";
import React from "react";
import { createPortal } from "react-dom";

const Backdrop = (props) => {
  return <div className="w-full h-[100vh] fixed left-0 top-0 bg-black bg-opacity-80 hover:cursor-pointer" onClick={props.ButtonClickHandler}></div>;
}

const Modal = (props) => {
  return (
    <div className="fixed top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col gap-3">
      <UserCard
        user={props.openModal}
        staticMode={true}
      />
      <Button onClick={props.ButtonClickHandler} bgColor="bg-indigo-400" text="Закрыть"/>
    </div>
  )
}

const UserModal = (props) => {
  const ButtonClickHandler = () => {
    props.setOpenModal(null);
  };

  useEffect(() => {
    if(props.openModal)
      document.body.classList.add("modal-open");
    else
      document.body.classList.remove("modal-open");

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [props.openModal]);

  return (
    <React.Fragment>
      {
        createPortal(<Backdrop ButtonClickHandler={ButtonClickHandler}/>, document.getElementById("backdrop"))
      }
      {
        createPortal(<Modal openModal={props.openModal} ButtonClickHandler={ButtonClickHandler}/>, document.getElementById("modal"))
      }
    </React.Fragment>
  );
};

export default UserModal;


/*

  useEffect(() => { // Old scroll hidden [fix with portal]
    if(props.openModal)
      document.body.classList.add("modal-open");
    else
      document.body.classList.remove("modal-open");

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [props.openModal]);


in css

body.modal-open {
  overflow: hidden;
}

*/