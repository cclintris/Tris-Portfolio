import styled from 'styled-components';
import { resolve_button_color, resolve_button_shape } from './utils';
import { I_StyledButtonProps } from './interface';

export const StyledButton = styled.a<I_StyledButtonProps>`
  /* :disabled { */
  /* pointer-events: none; */
  /* filter: alpha(opacity=50); IE滤镜，透明度50% */
  /* -moz-opacity: 0.5; Firefox私有，透明度50% */
  /* opacity: 0.5; 其他，透明度50% */
  /* } */

  // disable <a /> tag
  pointer-events: ${(props) => (props.disabled ? 'none' : null)};
  opacity: ${(props) => (props.disabled ? 0.5 : null)};

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
