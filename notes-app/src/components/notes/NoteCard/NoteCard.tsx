import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
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

};




export default function NoteCard({
  note,
  onDelete,
  onEdit,
}: NoteCardProps) {


  return (

    <Card 
      sx={{
        borderBottom: '1px solid #a1a1a18e', 
        borderTop: '1px solid #a1a1a18e',
        WebkitBoxShadow: '0px 0px 10px 7px #0000002f'
        }}
    >


      <CardContent>


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


        <Button

          onClick={() =>
            onEdit(note)
          }

        >

          Edit

        </Button>





        <Button

          color="error"

          onClick={() =>
            onDelete(note.id)
          }

        >

          Delete

        </Button>



      </CardActions>



    </Card>

  );

}