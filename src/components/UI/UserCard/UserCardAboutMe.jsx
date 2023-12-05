const UserCardAboutMe = ({ aboutMe, staticMode }) => {
  let truncatedString  = aboutMe?.trim();

  if (!staticMode && truncatedString?.length > 85)
  truncatedString  = aboutMe.substring(0, 85) + "...";

    return (
      <>
      {
        truncatedString ?.length > 0 ? (
        <div className="w-full h-full break-all font-gothamprolight text-stone-700">
          <p>О себе: {truncatedString}</p>
        </div>
      ) : (
        <div className=" bg-stone-200 rounded-xl h-[60px]"></div>
      )
      }
      </>
    );
};

export default UserCardAboutMe;
