interface ThemeSelectorRadioProps {
  theme: Theme;
  selected: boolean;
  handleSelection: (theme: Theme) => void;
}

const ThemeSelectorRadio: React.FC<ThemeSelectorRadioProps> = ({
  theme,
  selected,
  handleSelection,
}) => {
  return (
    <div
      className={`flex items-center align-middle rounded-lg gap-3 cursor-pointer ${
        selected && "bg-[#E0F1E7]"
      }`}
      onClick={() => handleSelection(theme)}
    >
      {selected ? (
        <span className={`p-2 rounded-full ${theme.equalButtonColor}`}></span>
      ) : (
        <input
          type="radio"
          className="p-2 border-gray-500 cursor-pointer bg-inherit text-inherit opacity-15"
          value={theme.toString()}
          checked={selected}
          onChange={() => handleSelection(theme)}
        />
      )}
    </div>
  );
};

export default ThemeSelectorRadio;
