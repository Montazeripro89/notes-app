import {

  FormControl,

  MenuItem,

  Select,

} from "@mui/material";

type SortOrder =

  | "newest"

  | "oldest";

type SortSelectProps = {

  value: SortOrder;

  onChange: (

    value: SortOrder

  ) => void;

};

export default function SortSelect({

  value,

  onChange,

}: SortSelectProps) {

  return (

    <FormControl

      size="small"

      sx={{

        width: 140,

      }}

    >

      <Select

        value={value}

        onChange={(event) =>

          onChange(

            event.target.value as SortOrder

          )

        }

        sx={{

          height: 46,

          borderRadius: 2,

          marginTop: 2,

          "& .MuiOutlinedInput-notchedOutline": {

            borderColor: "#cccccc77",

          },

          "&:hover .MuiOutlinedInput-notchedOutline": {

            borderColor: "#cccccc77",

          },

          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {

            borderColor: "#cccccc77",

            borderWidth: 1,

          },

        }}

      >

        <MenuItem value="newest">

          جدیدتر

        </MenuItem>

        <MenuItem value="oldest">

          قدیمی‌تر

        </MenuItem>

      </Select>

    </FormControl>

  );

}