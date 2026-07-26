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
      }}

      value={value}

      onChange={(event) =>
        onChange(event.target.value)
      }

      placeholder="Search notes..."

    />

  );

}