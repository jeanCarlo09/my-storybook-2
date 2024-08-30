import "./MyLabel.css";

interface Props {
  /**
   * Text to display in the label
   */
  label: string;

  /**
   * Label size
   */
  size?: "normal" | "h1" | "h2" | "h3";

  /**
   * Indicates if the label should be displayed in all caps
   * @default false
   */
  allCaps?: boolean;

  /**
   * Label color
   */
  color?: "text-primary" | "text-secondary" | "text-tertiary";

  /**
   * Label font color
   */
  fontColor?: string;
}

export const MyLabel = ({
  label,
  fontColor,
  size = "normal",
  allCaps = false,
  color = "text-primary",
}: Props) => {
  return (
    <span className={`${size} ${color} label`} style={{ color: fontColor }}>
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};
