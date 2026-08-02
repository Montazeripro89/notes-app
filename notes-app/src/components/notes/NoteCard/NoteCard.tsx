import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
} from "@mui/material";


import type {
  Note,
} from "../../../types/Note";



type NoteCardProps = {

  note: Note;


  onDelete: (
    id: string
  ) => void;


  onEdit: (
    note: Note
  ) => void;

  onView: (note: Note) => void;

};




export default function NoteCard({
  note,
  onDelete,
  onEdit,
  onView
}: NoteCardProps) {


  return (

    <Card 

      onClick={() => onView(note)}

      sx={{
        borderBottom: '1px solid #a1a1a18e', 
        borderTop: '1px solid #a1a1a18e',
        cursor: "pointer",
      }}
    >


      <CardContent
        sx={{
          borderBottom: '1px dotted #878787'  
        }}
      >


        <Typography
          variant="h6"
           sx={{
            display: "-webkit-box",
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >

          {note.title}

        </Typography>



        <Typography
          sx={{
            display: "-webkit-box",
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >

          {note.content}

        </Typography>



      </CardContent>




      <CardActions>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Button

          onClick={(event) => {

            event.stopPropagation();

            onEdit(note);

          }}

        >

          ویرایش

        </Button>

        <Button

          color="error"

          onClick={(event) => {

            event.stopPropagation();

            onDelete(note.id);

          }}

        >

          حذف

        </Button>
      </Box>



      </CardActions>



    </Card>

  );

}