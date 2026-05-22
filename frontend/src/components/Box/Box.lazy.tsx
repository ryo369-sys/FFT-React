import { lazy, Suspense, ComponentProps } from 'react';

const LazyBox = lazy(() => import('./Box'));

const Box = (props: ComponentProps<typeof LazyBox>) => (
  <Suspense fallback={null}>
    <LazyBox {...props} />
  </Suspense>
);

export default Box;
