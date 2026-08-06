import {
  Card,
  CardContent,
  IconButton,
  Typography,
  Box,
} from "@mui/material";

import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";

import type {
  Note,
} from "../../../types/Note";

type NoteCardProps = {

  note: Note;

  onEdit: (note: Note) => void;

  onDelete: (id: string) => void;

};

export default function NoteCard({

  note,

  onEdit,

  onDelete,

}: NoteCardProps) {

  return (

    <Card

      elevation={1}

      onClick={() => onEdit(note)}

      sx={{

        mb: 2,

        borderRadius: 3,

        cursor: "pointer",

        transition: ".2s",

        "&:hover": {

          boxShadow: 4,

        },

      }}

    >

      <CardContent
        sx={{
          p: 2,
          "&:last-child": {
            pb: 2,
          },
        }}
      >

        <Box

          sx={{

            display: "flex",

            justifyContent: "space-between",

            alignItems: "flex-start",

            mb: 1,

          }}

        >

          <Typography

            variant="h6"

            sx={{

              fontWeight: 700,

              flex: 1,

            }}

          >

            {note.title}

          </Typography>

          <IconButton

            color="error"

            size="small"

            onClick={(event) => {

              event.stopPropagation();

              onDelete(note.id);

            }}

          >

            <DeleteOutlineRoundedIcon />

          </IconButton>

        </Box>

        <Typography

          variant="body2"

          color="text.secondary"

          sx={{

            lineHeight: 1.8,

            display: "-webkit-box",

            WebkitLineClamp: 2,

            WebkitBoxOrient: "vertical",

            overflow: "hidden",

          }}

        >

          {note.content}

        </Typography>

      </CardContent>

    </Card>

  );

}