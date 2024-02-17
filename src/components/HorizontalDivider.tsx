import Circle from "@mui/icons-material/Brightness1Sharp";

const HorizontalDivider = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className={`flex justify-start items-center  ml-[-3px] mt-3 mb-10`}>
      {numbers.map((number: number) => (
        <Circle
          sx={{ color: "#ba75ae", width: "10px", height: "10px" }}
          key={number}
        />
      ))}
    </div>
  );
};

export default HorizontalDivider;
