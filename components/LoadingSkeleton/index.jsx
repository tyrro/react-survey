import PropTypes from 'prop-types';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const BASE_COLOR = '#313236';
export const HIGHLIGHT_COLOR = '#49494D';
export const BORDER_RADIUS = 12;

const LoadingSkeleton = ({ width, height, circle = false, className }) => {
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

LoadingSkeleton.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  circle: PropTypes.bool,
  className: PropTypes.string,
};

export default LoadingSkeleton;
