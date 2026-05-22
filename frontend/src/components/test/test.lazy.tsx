import { lazy, Suspense, ComponentProps } from 'react';

const Lazytest = lazy(() => import('./test'));

const test = (props: ComponentProps<typeof Lazytest>) => (
  <Suspense fallback={null}>
    <Lazytest {...props} />
  </Suspense>
);

export default test;
