import {ElementType, ForwardedRef, forwardRef} from 'react';
import styled from 'styled-components/native';
import {ThemeType} from '../styles/theme';

interface TextProps extends React.ComponentPropsWithoutRef<'p'> {
  as?: ElementType;
  fontSize?: keyof ThemeType['fontSize'];
  fontWeight?: 'bold' | 'medium' | 'regular';
  fontStyle?: keyof ThemeType['textStyle'];
  color?: keyof ThemeType['color'];
}
const CustomText = forwardRef(function Text(
  {fontSize, fontWeight, fontStyle, color, ...props}: TextProps,
  ref: ForwardedRef<HTMLParagraphElement>,
) {
  const {children, ...rest} = props;
  return (
    <Paragraph
      ref={ref}
      $size={fontSize}
      $color={color}
      $weight={fontWeight}
      $fontStyle={fontStyle}
      {...rest}>
      {children}
    </Paragraph>
  );
});

const Paragraph = styled.Text<{
  $size: TextProps['fontSize'];
  $weight: TextProps['fontWeight'];
  $fontStyle: keyof ThemeType['textStyle'];
  $color: keyof ThemeType['color'];
}>`
  line-height: 24px;
  font-weight: ${props => props.theme.fontWeight[props.$weight!]};
  color: ${props => props.theme.color[props.$color]};
  font-size: ${props => props.theme.fontSize[props.$size!]};
  ${props => props.$fontStyle && props.theme.textStyle[props.$fontStyle]}
`;

CustomText.defaultProps = {
  fontSize: 'md',
  fontWeight: 'medium',
  fontStyle: 'label100',
  color: 'gray900',
};

export default CustomText;
