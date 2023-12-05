const TitleBlock = ({title, children}) => {
    return (
        <div>
          <div className="text-center mb-3 text-stone-800 font-gothampromedium">
            {title}
          </div>
          {children}
        </div>
      );
}

export default TitleBlock;