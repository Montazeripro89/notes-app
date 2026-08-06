import {
  Box,
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

    <Box
      sx={{
        flex: 1,
      }}
    >

      <TextField

        fullWidth

        placeholder="جستجو..."

        variant="outlined"

        size="small"

        value={value}

        onChange={(event) =>

          onChange(

            event.target.value

          )

        }

        sx={{

          "& .MuiOutlinedInput-root": {

            height: 46,

            borderRadius: 2,

          },

          "& .MuiOutlinedInput-notchedOutline": {

            borderColor: "#cccccc77",

          },

          "&:hover .MuiOutlinedInput-notchedOutline": {

            borderColor: "#cccccc77",

          },

          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {

            borderColor: "#cccccc77",

            borderWidth: 1,

          },

        }}

      />

    </Box>

  );

}