import clsx from "clsx";

type Props = {
  className?: string;
  color?: string;
  height?: string;
  width?: string;
}

const LikeIcon: React.FC<Props> = ({ className, height = "20", width = "20", color = "#66CB9F" }) => {
  return (
    <span className={clsx('inline-block align-middle', className)}>
      <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Happy">
          <path id="Vector" d="M6.30769 8.46154C6.30769 8.27897 6.36183 8.1005 6.46326 7.9487C6.56469 7.7969 6.70886 7.67859 6.87753 7.60873C7.0462 7.53886 7.2318 7.52058 7.41085 7.5562C7.58991 7.59181 7.75439 7.67973 7.88349 7.80882C8.01258 7.93792 8.10049 8.10239 8.13611 8.28145C8.17173 8.46051 8.15345 8.64611 8.08358 8.81478C8.01372 8.98345 7.8954 9.12762 7.74361 9.22905C7.59181 9.33048 7.41334 9.38461 7.23077 9.38461C6.98596 9.38461 6.75117 9.28736 6.57806 9.11425C6.40495 8.94114 6.30769 8.70635 6.30769 8.46154ZM12.7692 9.38461C12.9518 9.38461 13.1303 9.33048 13.2821 9.22905C13.4339 9.12762 13.5522 8.98345 13.622 8.81478C13.6919 8.64611 13.7102 8.46051 13.6746 8.28145C13.639 8.10239 13.551 7.93792 13.4219 7.80882C13.2929 7.67973 13.1284 7.59181 12.9493 7.5562C12.7703 7.52058 12.5847 7.53886 12.416 7.60873C12.2473 7.67859 12.1032 7.7969 12.0017 7.9487C11.9003 8.1005 11.8462 8.27897 11.8462 8.46154C11.8462 8.70635 11.9434 8.94114 12.1165 9.11425C12.2896 9.28736 12.5244 9.38461 12.7692 9.38461ZM18 10C18 11.5822 17.5308 13.129 16.6518 14.4446C15.7727 15.7602 14.5233 16.7855 13.0615 17.391C11.5997 17.9965 9.99113 18.155 8.43928 17.8463C6.88743 17.5376 5.46197 16.7757 4.34315 15.6569C3.22433 14.538 2.4624 13.1126 2.15372 11.5607C1.84504 10.0089 2.00347 8.40034 2.60897 6.93853C3.21447 5.47672 4.23985 4.22729 5.55544 3.34824C6.87103 2.46919 8.41775 2 10 2C12.121 2.0024 14.1544 2.84603 15.6542 4.3458C17.154 5.84557 17.9976 7.879 18 10ZM16.7692 10C16.7692 8.66117 16.3722 7.35241 15.6284 6.23922C14.8846 5.12602 13.8274 4.25839 12.5905 3.74605C11.3536 3.2337 9.99249 3.09965 8.67939 3.36084C7.36629 3.62203 6.16013 4.26674 5.21343 5.21343C4.26674 6.16012 3.62203 7.36629 3.36084 8.67939C3.09965 9.99249 3.2337 11.3536 3.74605 12.5905C4.2584 13.8274 5.12603 14.8846 6.23922 15.6284C7.35241 16.3722 8.66117 16.7692 10 16.7692C11.7947 16.7672 13.5153 16.0534 14.7843 14.7843C16.0534 13.5153 16.7672 11.7947 16.7692 10ZM13.5065 11.3132C13.3652 11.2315 13.1972 11.2092 13.0396 11.2513C12.8819 11.2935 12.7474 11.3965 12.6657 11.5378C12.3299 12.1179 11.8146 12.5732 11.1975 12.8351C10.6335 13.0736 10.011 13.1383 9.41003 13.0208C8.80902 12.9032 8.25682 12.6089 7.82423 12.1754C7.6339 11.9851 7.46922 11.7707 7.33439 11.5378C7.25266 11.3965 7.11816 11.2935 6.96047 11.2514C6.80278 11.2092 6.63482 11.2315 6.49354 11.3132C6.35226 11.395 6.24924 11.5295 6.20713 11.6871C6.16502 11.8448 6.18727 12.0128 6.269 12.1541C6.64747 12.8086 7.19145 13.352 7.84634 13.7298C8.50123 14.1076 9.24397 14.3065 10 14.3065C10.7561 14.3065 11.4988 14.1076 12.1537 13.7298C12.8086 13.3519 13.3525 12.8085 13.731 12.154C13.8127 12.0127 13.835 11.8448 13.7928 11.6871C13.7507 11.5294 13.6477 11.395 13.5065 11.3132V11.3132Z"
            fill={color} />
        </g>
      </svg>
    </span>
  )
}

export default LikeIcon;