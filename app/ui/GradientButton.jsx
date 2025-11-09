export default function GradientButton({ children, className }) {
  return (
    <button
      className={`px-4 py-2 cursor-pointer bg-gradient-to-r from-gradient-from to-gradient-to text-primary font-semibold rounded-full shadow-lg hover:shadow-2xl  transition-all duration-500 hover:from-gradient-from/90 hover:to-gradient-to/90 ${className}`}
    >
      {children}
    </button>
  );
}
