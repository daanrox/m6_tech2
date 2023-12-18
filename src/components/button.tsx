type ButtonProps = {
  text: React.ReactNode;
};

export const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button className="px-12 bg-primary py-2 rounded-md w-full max-w-xs">
      {text}
    </button>
  );
};