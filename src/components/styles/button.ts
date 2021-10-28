import styled from 'styled-components';
import { resolve_button_color, resolve_button_shape } from '../../utils/index';
import { I_StyledButtonProps } from '../props';

export const StyledButton = styled.a<I_StyledButtonProps>`
  background-color: ${(props) => resolve_button_color(props.type)};
  border-radius: ${(props) => resolve_button_shape(props.shape)};
  padding: 0.8rem 2.5rem;
  color: white;
  cursor: pointer;
  display: inline-block;
  font-size: inherit;
  /* text-transform: uppercase; */
  position: relative;
  &:hover::after {
    content: '';
    position: absolute;
    width: calc(100% - ${(props) => resolve_button_shape(props.shape)});
    height: 0.2rem;
    background-color: var(--white-color);
    left: 20px;
    bottom: 0;
    transition: all 0.4s ease-in-out;
  }
`;
