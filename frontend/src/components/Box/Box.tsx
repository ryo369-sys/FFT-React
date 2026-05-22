import type { FC } from 'react';
import { BoxWrapper } from './Box.styled';

interface BoxProps {}

const Box: FC<BoxProps> = () => (
 <BoxWrapper data-testid="Box">
    Box Component
 </BoxWrapper>
);

export default Box;
