import css from "./SearchBox.module.css";

interface Props {
  handleSearch: (value: string) => void;
}
const SearchBox = ({ handleSearch }: Props) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleSearch(e.target.value);
  };
  return (
    <input
      className={css.input}
      type="text"
      placeholder="Search notes"
      onChange={onChange}
    />
  );
};

export default SearchBox;
