import type { FC } from 'react';
import { testWrapper } from './test.styled';

interface testProps {}

const test: FC<testProps> = () => (
 <testWrapper data-testid="test">
    test Component
 </testWrapper>
);

export default test;
