import clsx from 'clsx';

type ButtonProps = {
  label: string;
  className?: string;
  onClick: (e: any) => void;
};

const Button: React.FC<ButtonProps> = ({ label, className, onClick }) => {
  return (
    <button
      className={clsx('bg-blue-600 text-white py-1 px-2 rounded', className)}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
