import ImportIcon from "./ImportIcon";

const EntryField = (props) => {
  return (
    <label className="text-stone-500 font-gothampromedium">
      {props.title}
      <div className={`flex items-center w-full rounded-md h-10 ${props.iconType ? `pl-1` : `pl-3`} bg-stone-100`}>
        {
          props.iconType && <ImportIcon Type={props.iconType} />
        }
        {props.children}
      </div>
    </label>
  );
};

export default EntryField;
