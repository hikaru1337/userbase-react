const ImportIcon = (props) => {
  const { Type } = props;
  let Value = "empty";
  let Wh = 34;

  switch (Type) {
    case "0":
      Value = "M10 10v4a2 2 0 1 0 4 0v-4a2 2 0 1 0-4 0z";
      break;
    case "1":
      Value = "m10 10l2-2v8";
      break;
    case "2":
      Value = "M10 8h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h3";
      Wh = 36;
      break;
    case "3":
      Value = "M10 8h2.5A1.5 1.5 0 0 1 14 9.5v1a1.5 1.5 0 0 1-1.5 1.5H11h1.5a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5H10";
      break;
    case "4":
      Value = "M10 8v3a1 1 0 0 0 1 1h3m0-4v8";
      break;
    case "5":
      Value = "M10 15a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-3V8h4";
      break;
  }

  return (
    <svg
      className="text-stone-500"
      xmlns="http://www.w3.org/2000/svg"
      width={Wh}
      height={Wh}
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d={Value}
      />
    </svg>
  );
};

export default ImportIcon;
