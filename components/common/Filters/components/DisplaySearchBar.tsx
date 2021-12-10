import { HiOutlineSearch } from 'react-icons/hi';

interface Props {
  setChangeInput?: ((any: any) => void | undefined) | undefined;
}

const DisplayHeader: React.FC<Props> = ({ setChangeInput }) => {
  return (
    <div id="input-container">
      <HiOutlineSearch />
      <input
        id="filter_input"
        type="text"
        placeholder={`Search`}
        name="searchInput"
        onChange={e => setChangeInput(e.target.value)}
      />
    </div>
  );
};

export default DisplayHeader;
