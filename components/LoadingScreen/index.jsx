import PropTypes from 'prop-types';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const BASE_COLOR = '#313236';
export const HIGHLIGHT_COLOR = '#49494D';
export const BORDER_RADIUS = 12;

export const loadingScreenTestIds = {
  base: 'loading-screen',
  skeleton: 'loading-screen__skeleton',
  skeletonTheme: 'loading-screen__skeleton-theme',
};

const LoadingScreen = ({ width, height, circle = false, className }) => {
  return (
    <SkeletonTheme
      baseColor={BASE_COLOR}
      highlightColor={HIGHLIGHT_COLOR}
      borderRadius={BORDER_RADIUS}
      width={width}
      height={height}
    >
      <Skeleton circle={circle} className={className} />
    </SkeletonTheme>
  );
};

LoadingScreen.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  circle: PropTypes.bool,
  className: PropTypes.string,
};

export default LoadingScreen;
