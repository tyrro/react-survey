export const skeletonSelector = 'span.react-loading-skeleton';

export function getLoadingSkeleton() {
  const skeleton = document.querySelector(skeletonSelector);
  if (!skeleton) {
    throw new Error('Could not find skeleton.');
  }

  return skeleton;
}
