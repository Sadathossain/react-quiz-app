import { useState } from "react";
import useLocalStorage from "../utils/useLocalStorage";
import { makeStyles } from "@material-ui/core/styles";
import {
  InputLabel,
  MenuItem,
  FormControl,
  FormControlLabel,
  Select,
  Paper,
  Grid,
  TextField,
  Typography,
  Fab,
  Checkbox,
  Snackbar,
} from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import ClearAllIcon from "@material-ui/icons/ClearAll";
import NavigationIcon from "@material-ui/icons/Navigation";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.primary,
  },
  formControl: {
    minWidth: 220,
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function QuestionsPage() {
  const classes = useStyles();
  const [question, setQuestion] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [setQuestionBank] = useLocalStorage("questionBank", []);
  const [questionNo, setQuestionNo] = useLocalStorage("questionNo", 5);
  // const [questionBank, setQuestionBank] = useState([]);
  const [optA, setOptA] = useState("");
  const [optB, setOptB] = useState("");
  const [optC, setOptC] = useState("");
  const [optD, setOptD] = useState("");
  const [answer, setAnswer] = useState("");
  const [checked, setChecked] = useState(false);
  const [msg, setMsg] = useState(
    "All of Your Data has been Cleared to Initial"
  );
  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };
  const handleOptAChange = (event) => {
    setOptA(event.target.value);
  };
  const handleOptBChange = (event) => {
    setOptB(event.target.value);
  };
  const handleOptCChange = (event) => {
    setOptC(event.target.value);
  };
  const handleOptDChange = (event) => {
    setOptD(event.target.value);
  };
  const handleSelectChange = (event) => {
    setAnswer(event.target.value);
  };
  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
  };
  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };
  const handleSubmit = () => {
    setQuestionNo(questionNo + 1);
    let q = {
      id: questionNo,
      question: question,
      optA: optA,
      optB: optB,
      optC: optC,
      optD: optD,
      answer: answer,
      userAnswer: "DidNotParticipated",
      archived: checked,
    };
    setQuestionBank((questionBank) => [...questionBank, q]);
    setMsg("Data Saved");
    setOpenSnackbar(true);
  };
  const handleClearAll = () => {
    localStorage.removeItem("questionBank");
    localStorage.removeItem("userAnswers");
    localStorage.removeItem("archivedList");
    localStorage.removeItem("userScore");
    setQuestionNo(7);
    setOpenSnackbar(true);
  };
  return (
    <div className={classes.root}>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        open={openSnackbar}
        autoHideDuration={4500}
        onClose={handleCloseSnackbar}
        message={msg}
      />
      <Typography variant="h5" style={{ textAlign: "center" }}>
        Questions Page (Admin only)
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <TextField
              id="question"
              value={question}
              onChange={handleQuestionChange}
              style={{ marginTop: 35, marginBottom: 35 }}
              placeholder="Question"
              helperText="Type Your Question Here"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <TextField
              id="option-a"
              value={optA}
              onChange={handleOptAChange}
              placeholder="Option A"
              helperText="Type Your Option A Here"
              fullWidth
              variant="outlined"
            />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <TextField
              id="option-b"
              value={optB}
              onChange={handleOptBChange}
              placeholder="Option B"
              helperText="Type Your Option B Here"
              fullWidth
              variant="outlined"
            />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <TextField
              id="option-c"
              value={optC}
              onChange={handleOptCChange}
              placeholder="Option C"
              helperText="Type Your Option C Here"
              fullWidth
              variant="outlined"
            />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <TextField
              id="option-d"
              value={optD}
              onChange={handleOptDChange}
              placeholder="Option D"
              helperText="Type Your Option D Here"
              fullWidth
              variant="outlined"
            />
          </Paper>
        </Grid>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
          style={{ marginTop: 20 }}
        >
          <FormControlLabel
            control={
              <Checkbox
                checked={checked}
                onChange={handleCheckboxChange}
                name="archived"
                color="primary"
              />
            }
            label="Archived Question"
          />
          <FormControl
            required
            variant="outlined"
            className={classes.formControl}
            error
          >
            <InputLabel id="answer">Answer</InputLabel>
            <Select value={answer} onChange={handleSelectChange} label="Answer">
              <MenuItem value="a">Option A</MenuItem>
              <MenuItem value="b">Option B</MenuItem>
              <MenuItem value="c">Option C</MenuItem>
              <MenuItem value="d">Option D</MenuItem>
            </Select>
          </FormControl>
          <Fab color="primary" aria-label="save" onClick={handleSubmit}>
            <SaveIcon />
          </Fab>
          <Fab
            color="secondary"
            aria-label="clear-all"
            onClick={handleClearAll}
          >
            <ClearAllIcon />
          </Fab>
          <Fab variant="extended">
            <NavigationIcon className={classes.extendedIcon} />
            Question-Bank
          </Fab>
        </Grid>
      </Grid>
    </div>
  );
}
