const Accordian = (props) => {
  return (
    <div className="mb-3 mx-auto w-4/5 bg-backgroundLight dark:bg-backgroundDark text-textLight dark:text-textDark">
      <button
        className="w-full p-4 text-left text-textLight dark:text-textDark bg-headerLight dark:bg-headerDark hover:text-blue-800 border border-textLight dark:border-textDark p-1 rounded-md transition duration-300"
        onClick={props.toggleAccordion}
      >
        {props.title}
        <span
          className={`float-right transform ${
            props.isOpen ? "rotate-180" : "rotate-0"
          } 
								transition-transform duration-300`}
        >
          &#9660; {/* chevron */}
        </span>
      </button>
      {props.isOpen && (
        <div className="p-4 border border-textLight dark:border-textDark rounded-md bg-headerLight dark:bg-headerDark p-4 text-textLight dark:text-textDark">
          {props.data}
        </div>
      )}
    </div>
  );
};

export default Accordian;
