import styled from 'styled-components';
import { resolve_button_color, resolve_button_shape } from './utils';
import { I_StyledButtonProps } from './interface';

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
  &::after {
    content: '';
    position: absolute;
    left: ${(props) =>
      Number(
        resolve_button_shape(props.shape).substring(
          0,
          resolve_button_shape(props.shape).length - 2
        )
      ) /
        2 +
      'px'};
    bottom: 0;
    width: 0;
    height: 0.2rem;
    transition: all 0.4s ease-in-out;
    opacity: 0.7;
  }
  &:hover::after {
    width: calc(100% - ${(props) => resolve_button_shape(props.shape)});
    background-color: var(--white-color);
  }
`;
