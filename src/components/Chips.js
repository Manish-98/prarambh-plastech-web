export default function Chips({ 
  options, 
  selectedOption, 
  onSelect, 
  allLabel = "All",
  className = "flex flex-wrap gap-2"
}) {
  return (
    <div className={className}>
      <button
        className={`px-4 py-1 rounded-full border ${!selectedOption ? 'bg-accent text-white' : 'bg-white text-gray-700'} transition`}
        onClick={() => onSelect(null)}
      >
        {allLabel}
      </button>
      {options.map(option => (
        <button
          key={option}
          className={`px-4 py-1 rounded-full border ${selectedOption === option ? 'bg-accent text-white' : 'bg-white text-gray-700'} transition`}
          onClick={() => onSelect(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
} 