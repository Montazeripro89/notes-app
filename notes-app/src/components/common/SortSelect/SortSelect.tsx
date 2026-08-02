import {
  FormControl,
  MenuItem,
  Select,
} from "@mui/material";


type SortOrder =

  "newest"

  |

  "oldest";



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
      sx={{
        width: '30vw',
        "& .MuiOutlinedInput-root": {
          borderRadius: 0,
        },
      }}
    >

      <Select

        value={value}

        onChange={(event) =>

          onChange(
            event.target.value as SortOrder
          )

        }

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