import PropTypes from 'prop-types';
import { FilterLabel, FilterText, FilterInput } from './Filter.styled';
export const Filter = ({ value, onChange }) => {
  return (
    <div>
      <FilterLabel>
        <FilterText>Find contacts by name</FilterText>
        <FilterInput
          type="text"
          name="filter"
          value={value}
          onChange={onChange}
        />
      </FilterLabel>
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
