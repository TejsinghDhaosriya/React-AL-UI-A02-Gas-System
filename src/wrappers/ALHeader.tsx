import "./ALHeader.css";

type Props = {
  name: string;
  value: string;
  percentage?: number;
};

const ALHeader = ({ name, value, percentage }: Props) => {
  return (
    <div className="al-header-container">
      <div>
        <span>{value} </span>
        <span style={{ color: "green" }}>
          {percentage ? "●" + percentage + "%" : ""}
        </span>
      </div>
      <span className="al-header-name">{name}</span>
    </div>
  );
};
export default ALHeader;
