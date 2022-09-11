import PropTypes from 'prop-types';
import { Section } from './Section.styled';

export function SectionRender({ children }) {
  return <Section>{children}</Section>;
}

SectionRender.propTypes = {
  children: PropTypes.node,
};
