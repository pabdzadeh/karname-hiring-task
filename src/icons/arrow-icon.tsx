import clsx from "clsx"

type Props = {
  className?: string;
  color?: string;
  height?: string;
  width?: string;
}

const ArrowIcon: React.FC<Props> = ({ className, height = "20", width = "20", color = "#9CAEBB" }: Props) => {
  return (
    <span className={clsx('inline-block align-middle', className)}>
      <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Arrow-down">
          <path id="Polygon 1" d="M10.8058 13.9033C10.4062 14.4472 9.59376 14.4472 9.19416 13.9033L5.10774 8.34214C4.62246 7.68172 5.09404 6.75 5.91358 6.75L14.0864 6.75C14.906 6.75 15.3775 7.68172 14.8923 8.34214L10.8058 13.9033Z"
            fill={color} />
        </g>
      </svg>
    </span>
  )
}

export default ArrowIcon;