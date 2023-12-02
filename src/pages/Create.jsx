import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useTheme } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const theme = useTheme();
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [category, setCategory] = useState("money");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError(false);
    setDetailsError(false);

    if (title === "" || details === "") {
      if (title === "") setTitleError(true);
      if (details === "") setDetailsError(true);
      return; 
    }

    const postData = { title, details, category };
    fetch("https://mohamad.free.beeceptor.com/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        navigate("/notes", { state: { data: [postData] } });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <Container maxWidth="lg">
      <Typography
        variant="h6"
        component="h1"
        color={theme.palette.textColor.title}
        sx={theme.palette.textstyle.title}
      >
        Create a New Note
      </Typography>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          error={titleError}
          {...theme.texyField.Field1}
          sx={theme.texyField.styleField}
        />
        <TextField
          onChange={(e) => setDetails(e.target.value)}
          error={detailsError}
          {...theme.texyField.Field2}
          sx={theme.texyField.styleField}
        />

        <FormControl sx={{ display: "block", marginTop: 2, marginBottom: 2 }}>
          <FormLabel>Note Category</FormLabel>
          <RadioGroup
            defaultValue="money"
            onChange={(e) => setCategory(e.target.value)}
          >
            <FormControlLabel
              value="money"
              control={<Radio color="secondary" />}
              label="Money"
            />
            <FormControlLabel
              value="todos"
              control={<Radio color="secondary" />}
              label="Todos"
            />
            <FormControlLabel
              value="reminders"
              control={<Radio color="secondary" />}
              label="Reminders"
            />
            <FormControlLabel
              value="work"
              control={<Radio color="secondary" />}
              label="Work"
            />
          </RadioGroup>
        </FormControl>

        <Button
          type="submit"
          color="secondary"
          endIcon={<KeyboardArrowRightIcon />}
          variant="contained"
        >
          SUBMIT
        </Button>
      </form>
    </Container>
  );
};

export default Create;
