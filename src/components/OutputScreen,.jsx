import { React } from 'react';
import PropTypes from 'prop-types';

function OutputScreen({ state: { total, next, operation } }) {
  return (
    <input type="text" id="screen" value={next || operation || total || 0} readOnly />
  );
}

OutputScreen.propTypes = {
  state: PropTypes.func.isRequired,
};

export default OutputScreen;
