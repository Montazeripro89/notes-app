import {
  TextField,
} from "@mui/material";


type SearchBarProps = {

  value: string;

  onChange: (
    value: string
  ) => void;

};



export default function SearchBar({
  value,
  onChange,
}: SearchBarProps) {


  return (

    <TextField

      sx={{
        width: '70vw',
        "& .MuiOutlinedInput-root": {
          borderRadius: 0,
        },
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "#cccccc77",
        },

        "&:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: "#cccccc77",
        },

        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: "#cccccc77",
          borderWidth: "1px",
        },

      }}

      value={value}

      onChange={(event) =>
        onChange(event.target.value)
      }

      placeholder="Search notes..."

    />

  );

}