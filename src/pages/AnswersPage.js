import { useState } from "react";
import { useHistory } from "react-router-dom";
import useLocalStorage from "../utils/useLocalStorage";
import {
  Grid,
  Paper,
  Typography,
  Button,
  Checkbox,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { mockData } from "../mockData";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.primary,
  },
}));

export default function AnswersPage() {
  let history = useHistory();

  const classes = useStyles();
  const [index, setIndex] = useState(0);
  const [checkedState, setCheckedState] = useState(new Array(4).fill(false));
  const [openDialog, setOpenDialog] = useState(false);

  const [userAnswer, setUserAnswer] = useState("");
  const [userScore, setUserScore] = useLocalStorage("userScore", 0);

  const [questionBank, setQuestionBank] = useLocalStorage(
    "questionBank",
    mockData
  );

  const [userAnswers, setUserAnswers] = useLocalStorage("userAnswers", []);

  const handleDialogClose = () => {
    setOpenDialog(false);
    setUserScore(0);
    history.push("/");
  };
  const handleSubmit = (event) => {
    let a = new Array(4).fill(false);
    a[event.target.value] = true;
    setCheckedState(a);
    let answer;
    switch (parseInt(event.target.value)) {
      case 0:
        answer = "a";
        break;
      case 1:
        answer = "b";
        break;
      case 2:
        answer = "c";
        break;
      case 3:
        answer = "d";
        break;
      default:
        answer = "";
    }
    setUserAnswer(answer);
  };
  const handleNext = () => {
    // Scoring
    if (questionBank[index].answer === userAnswer) {
      setUserScore(userScore + 1);
    } else {
      // console.log('No Score')
    }
    // User Answer Submission
    let answer;
    switch (userAnswer) {
      case "a":
        answer = questionBank[index].optA;
        break;
      case "b":
        answer = questionBank[index].optB;
        break;
      case "c":
        answer = questionBank[index].optC;
        break;
      case "d":
        answer = questionBank[index].optD;
        break;
      default:
        answer = "";
    }
    let ua = {
      id: questionBank[index].id,
      question: questionBank[index].question,
      answer: questionBank[index].answer,
      userAnswer: userAnswer,
    };
    setUserAnswers((userAnswers) => [...userAnswers, ua]);
    if (index === questionBank.length - 1) {
      // Reached End
      setOpenDialog(true);
    } else {
      // Goto Next
      setIndex(index + 1);
      setCheckedState(new Array(4).fill(false));
    }
  };

  return (
    <div className={classes.root}>
      <Typography variant="h5" style={{ textAlign: "center" }}>
        There are {questionBank.length} Questions.
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="h6" style={{ textAlign: "center" }}>
              {questionBank[index].question}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Checkbox
              checked={checkedState[0]}
              onChange={handleSubmit}
              value={0}
              inputProps={{ "aria-label": "primary checkbox" }}
            />
            <Typography variant="subtitle1" style={{ textAlign: "center" }}>
              {questionBank[index].optA}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Checkbox
              checked={checkedState[1]}
              onChange={handleSubmit}
              value={1}
              inputProps={{ "aria-label": "primary checkbox" }}
            />
            <Typography variant="subtitle1" style={{ textAlign: "center" }}>
              {questionBank[index].optB}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Checkbox
              checked={checkedState[2]}
              onChange={handleSubmit}
              value={2}
              inputProps={{ "aria-label": "primary checkbox" }}
            />
            <Typography variant="subtitle1" style={{ textAlign: "center" }}>
              {questionBank[index].optC}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Checkbox
              checked={checkedState[3]}
              onChange={handleSubmit}
              value={3}
              inputProps={{ "aria-label": "primary checkbox" }}
            />
            <Typography variant="subtitle1" style={{ textAlign: "center" }}>
              {questionBank[index].optD}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{ marginTop: 20 }}
      >
        <Button
          onClick={handleNext}
          size="large"
          variant="contained"
          color="secondary"
        >
          Submit and Go Next
        </Button>
        {/* <Button onClick={() => {setIndex(index-1); setCheckedState(new Array(4).fill(false))}}>Previous</Button> */}
      </Grid>
      <Dialog
        onClose={handleDialogClose}
        aria-labelledby="customized-dialog-title"
        open={openDialog}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleDialogClose}>
          Result
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            You answered {userScore} correct out of {questionBank.length}
          </Typography>
        </DialogContent>
      </Dialog>
    </div>
  );
}
