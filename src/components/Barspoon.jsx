import { useMemo } from "react";

const BarSpoon = ({
  barSpoonBarSpoon,
  barSpoonIconOverflow,
  barSpoonIconHeight,
  barSpoonIconPosition,
  barSpoonIconTop,
  barSpoonIconLeft,
}) => {
  const barSpoonIconStyle = useMemo(() => {
    return {
      overflow: barSpoonIconOverflow,
      height: barSpoonIconHeight,
      position: barSpoonIconPosition,
      top: barSpoonIconTop,
      left: barSpoonIconLeft,
    };
  }, [
    barSpoonIconOverflow,
    barSpoonIconHeight,
    barSpoonIconPosition,
    barSpoonIconTop,
    barSpoonIconLeft,
  ]);

  return (
    <img
      className="w-4 max-w-full overflow-hidden h-[102px]"
      alt=""
      src={barSpoonBarSpoon}
      style={barSpoonIconStyle}
    />
  );
};

export default BarSpoon;
