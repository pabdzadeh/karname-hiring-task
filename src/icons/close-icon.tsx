import clsx from "clsx"

type Props = {
  className?: string;
  color?: string;
  height?: string;
  width?: string;
}

const CloseIcon: React.FC<Props> = ({ className, height = "12", width = "12", color = "#454545" }: Props) => {
  return (
    <span className={clsx('inline-block align-middle', className)}>
      <svg width={width} height={height} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="i-remove">
          <path id="Path" d="M11 1L1 11" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path id="Path_2" d="M11 11L1 1" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </span>
  )
}

export default CloseIcon;