import "./App.css";
import EntryList from "./components/EntryList";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Paper elevation={2} style={{ padding: 20 }}>
          <Typography gutterBottom variant="h3" component="h3">
            Todo App
          </Typography>
          <EntryList></EntryList>
        </Paper>
      </header>
    </div>
  );
}

export default App;
