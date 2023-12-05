const ImportIcon = ({ Type }) => {
  let value = "empty";
  let wh = 34;

  switch (Type) {
    case "0":
      value = "M10 10v4a2 2 0 1 0 4 0v-4a2 2 0 1 0-4 0z";
      break;
    case "1":
      value = "m10 10l2-2v8";
      break;
    case "2":
      value = "M10 8h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h3";
      wh = 36;
      break;
    case "3":
      value = "M10 8h2.5A1.5 1.5 0 0 1 14 9.5v1a1.5 1.5 0 0 1-1.5 1.5H11h1.5a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5H10";
      break;
    case "4":
      value = "M10 8v3a1 1 0 0 0 1 1h3m0-4v8";
      break;
    case "5":
      value = "M10 15a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-3V8h4";
      break;
  }

  return (
    <div className={`w-[${wh}px]`}>
      <svg
      className="text-stone-500"
      xmlns="http://www.w3.org/2000/svg"
      width={wh}
      height={wh}
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d={value}
      />
    </svg>
    </div>
  );
};

export default ImportIcon;
