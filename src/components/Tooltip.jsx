export default function Tooltip({ message, children, posit }) {
  return (
    <div className="group relative flex">
      {children}
      {(posit == "below" || !posit) && ( // position tiooltip below element
        <span className="absolute top-8 scale-0 transition-all rounded p-2 text-xs group-hover:scale-100 bg-transparent text-black dark:text-white">
          {message}
        </span>
      )}
      {posit == "above" && ( // position tooltip above element
        <span className="absolute bottom-8 scale-0 transition-all rounded p-2 text-xs group-hover:scale-100 bg-transparent text-black dark:text-white">
          {message}
        </span>
      )}
    </div>
  );
}

// Danke - https://ahmadrosid.com/blog/react-tailwind-tooltip
