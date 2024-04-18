import { useMemo } from "react";

const Property1Default = ({
  signUp,
  property1DefaultPosition,
  property1DefaultTop,
  property1DefaultLeft,
  property1DefaultHeight,
  property1DefaultWidth,
  property1DefaultPadding,
  property1DefaultDebugCommit,
  signUpMinWidth,
}) => {
  const property1DefaultStyle = useMemo(() => {
    return {
      position: property1DefaultPosition,
      top: property1DefaultTop,
      left: property1DefaultLeft,
      height: property1DefaultHeight,
      width: property1DefaultWidth,
      padding: property1DefaultPadding,
      debugCommit: property1DefaultDebugCommit,
    };
  }, [
    property1DefaultPosition,
    property1DefaultTop,
    property1DefaultLeft,
    property1DefaultHeight,
    property1DefaultWidth,
    property1DefaultPadding,
    property1DefaultDebugCommit,
  ]);

  const signUpStyle = useMemo(() => {
    return {
      minWidth: signUpMinWidth,
    };
  }, [signUpMinWidth]);

  return (
    <div
      className="box-border flex flex-row items-center justify-center py-0 px-12 text-left text-base text-white font-noto-serif border-[1px] border-solid border-white"
      style={property1DefaultStyle}
    >
      <div className="relative uppercase font-black" style={signUpStyle}>
        {signUp}
      </div>
    </div>
  );
};

export default Property1Default;
