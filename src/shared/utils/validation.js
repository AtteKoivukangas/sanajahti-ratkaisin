import PropTypes from 'prop-types';

export const withPropsValidation = ({ props, propTypes, componentName = '' }) => {
  PropTypes.checkPropTypes(propTypes, props, 'prop', componentName);
};