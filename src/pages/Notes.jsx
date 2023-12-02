import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions'; // Import CardActions for the delete button
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton'; // Import IconButton for clickable icons
import DeleteIcon from '@mui/icons-material/Delete'; // Import the delete icon
import { useTheme } from '@mui/material/styles';

const Notes = () => {
  const location = useLocation();
  const theme = useTheme();
  const [savedNotes, setSavedNotes] = useState(() => {
    const localData = localStorage.getItem('notes');
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    // Only update state and localStorage if there is a new note and it doesn't already exist
    if (location.state?.data) {
      const newNotes = [...savedNotes, ...location.state.data];
      setSavedNotes(newNotes);
      localStorage.setItem('notes', JSON.stringify(newNotes));
    }
  }, [location]);

  const handleDelete = (indexToDelete) => {
    const updatedNotes = savedNotes.filter((_, index) => index !== indexToDelete);
    setSavedNotes(updatedNotes);
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
  };

  return (
    <Container maxWidth="lg">
      <Grid container spacing={theme.spacing(2)}>
        {savedNotes.length > 0 ? (
          savedNotes.map((note, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <Card raised>
                <CardContent>
                  <Typography variant="h5" component="div" gutterBottom>
                    {note.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {note.details}
                  </Typography>
                  <Typography variant="overline" display="block" gutterBottom>
                    Category: {note.category}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="delete" onClick={() => handleDelete(index)}>
                    <DeleteIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            <Typography variant="subtitle1" gutterBottom>
              No notes available
            </Typography>
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default Notes;
