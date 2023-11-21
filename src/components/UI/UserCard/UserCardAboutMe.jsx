const UserCardAboutMe = (props) => {
  const { aboutMe, staticMode } = props;
  let newString = aboutMe;
  if (aboutMe && !staticMode && aboutMe.length > 85)
    newString = aboutMe.substring(0, 85) + "...";

    return (
      <>
      {
        newString?.length > 0 ? (
        <div className="w-full h-full break-all font-gothamprolight text-stone-700">
          <p>О себе: {newString}</p>
        </div>
      ) : (
        <div className=" bg-stone-200 rounded-xl h-[60px]"></div>
      )
      }
      </>
    );
};
export default UserCardAboutMe;
/* 
 rounded-xl bg-stone-200 text-stone-200
*/
