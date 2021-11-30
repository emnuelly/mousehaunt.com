import NumberFormat from 'react-number-format';

interface Props {
  groupStyle?: "thousand" | "lakh" | "wan" | undefined;
  thousandSeparator?: string | boolean | undefined;
  decimalSeparator?: string | undefined;
  suffix?: string | undefined;
  value?: number;
  displayType: "input" | "text" | undefined;
  icon: boolean;
  renderText?: () => ((formattedValue: string) => React.ReactNode) | undefined;
}

const FormatNumber: React.FC<Props> = ({
  groupStyle,
  thousandSeparator,
  decimalSeparator,
  suffix,
  value,
  displayType,
  renderText,
}: Props) => {
  return (
    <NumberFormat
      thousandsGroupStyle={groupStyle}
      thousandSeparator={thousandSeparator}
      decimalSeparator={decimalSeparator}
      suffix={suffix}
      value={value}
      displayType={displayType}
      renderText={renderText}
    />
  );
};

export default FormatNumber;
