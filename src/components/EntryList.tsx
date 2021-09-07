import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import AddIcon from "@material-ui/icons/Add";
import {
  ListItemSecondaryAction,
  IconButton,
  TextField,
} from "@material-ui/core";

import DeleteIcon from "@material-ui/icons/Delete";
import { Input } from "@material-ui/icons";

export default function CheckboxList() {
  const [array, setArray] = React.useState([
    { task: "HTML I", done: true },
    { task: "CSS", done: true },
    { task: "Responsive design", done: true },
    { task: "Git", done: true },
    { task: "JavaScript I", done: true },
    { task: "JavaScript II", done: false },
  ]);
  const [value, setValue] = React.useState("");

  const handleToggle = (index: number) => () => {
    const newArray = [...array];
    newArray[index].done = !newArray[index].done;
    setArray(newArray);
  };

  const handleDelete = (index: number) => () => {
    const newArray = [...array];
    newArray.splice(index, 1);
    setArray(newArray);
  };

  const handleAdd = (event: any) => {
    const newArray = [...array];
    if (value !== "") {
      newArray.push({ task: value, done: false });
    }
    setArray(newArray);
    setValue("");
    event?.preventDefault();
  };

  return (
    <>
      <List className="List-container">
        {array.map((item) => {
          const key = array.indexOf(item);
          const labelId = `checkbox-list-label-${key}`;

          return (
            <ListItem
              key={key}
              role={undefined}
              dense
              button
              onClick={handleToggle(key)}
            >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={item.done}
                  disableRipple
                  inputProps={{ "aria-labelledby": labelId }}
                />
              </ListItemIcon>

              <ListItemText
                style={{
                  color: item.done ? "lightgray" : "inherit",
                }}
                id={labelId}
                primary={item.task}
              />
              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={handleDelete(key)}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
      </List>
      <form id="add-task" onSubmit={handleAdd}>
        <TextField
          id="task-input"
          label="Add task"
          variant="outlined"
          value={value}
          fullWidth
          onChange={(e) => setValue(e.target.value)}
        />
        <IconButton aria-label="add" onClick={handleAdd}>
          <AddIcon />
        </IconButton>
      </form>
    </>
  );
}
