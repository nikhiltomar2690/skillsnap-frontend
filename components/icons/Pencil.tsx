const Pencil = ({...props}) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.9997 3L16 5L18.999 8.00103L21 6L17.9997 3ZM14.9997 6L3 18V21H6L18 9L14.9997 6Z"
          fill="white"
        />
      </svg>
    );
  };
  
  export default Pencil;