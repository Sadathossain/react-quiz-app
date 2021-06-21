import { useState } from "react";
import useLocalStorage from "../utils/useLocalStorage";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { mockData } from "../mockData";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  list: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
    textAlign: "center",
  },
}));

export default function ManagePage() {
  const classes = useStyles();
  const [dense] = useState(false);

  const [list, setList] = useLocalStorage("questionBank", mockData);
  const [userReport] = useLocalStorage("userAnswers");
  const [archivedList, setArchivedList] = useLocalStorage("archivedList", []);

  function handleDelete(id) {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
    setArchivedList((archivedList) => [
      ...archivedList,
      list.find((x) => x.id === id),
    ]);
    // console.log('userAnswers', JSON.parse(localStorage.getItem('userScore')), JSON.parse(localStorage.getItem('userAnswers')))
  }
  function handleUndoDelete(id) {
    const newList = archivedList.filter((item) => item.id !== id);
    setArchivedList(newList);
    setList((list) => [...list, archivedList.find((x) => x.id === id)]);
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" className={classes.title}>
            Active Questions
          </Typography>
          <div className={classes.list}>
            <List dense={dense}>
              <QuestionList list={list} onRemove={handleDelete} />
            </List>
          </div>
        </Grid>
        {archivedList === undefined ? null : (
          <Grid item xs={12} md={4}>
            <Typography variant="h6" className={classes.title}>
              Archived Questions
            </Typography>
            <div className={classes.list}>
              <List dense={dense}>
                <QuestionList list={archivedList} onRemove={handleUndoDelete} />
              </List>
            </div>
          </Grid>
        )}
        {userReport === undefined ? null : (
          <Grid item xs={12} md={4}>
            <Typography variant="h6" className={classes.title}>
              User Report
            </Typography>
            <div className={classes.list}>
              <List dense={dense}>
                <ReportList list={userReport}/>
              </List>
            </div>
          </Grid>
        )}
      </Grid>
    </div>
  );
}
const QuestionList = ({ list, onRemove }) =>
  list.map((item) => <Item key={item.id} item={item} onRemove={onRemove} />);
const Item = ({ item, onRemove }) => (
  <ListItem>
    <ListItemText primary={item.question.slice(0, 20) + "..."} />
    <IconButton
      edge="end"
      aria-label="delete"
      onClick={() => onRemove(item.id)}
    >
      <DeleteIcon />
    </IconButton>
  </ListItem>
);
const ReportList = ({ list}) =>
  list.map((item) => <ReportItem key={item.id} item={item} />);
const ReportItem = ({ item }) => (
  <ListItem>
    <ListItemText primary={"Question '" + item.question.slice(0, 10) + "...,' User Answered =>"} />
    <ListItemText primary={item.userAnswer} style={{textAlign: 'right'}}/>
  </ListItem>
);
