import './App.css';
import Header from './components/Header';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';


function App() {

  // const [form, setForm] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [data, setData] = useState([]);

  const addData = () => {
    setData([...data, {name, email}]);
    setName("");
    setEmail("");
  }

  const removeItem = (index) => {
    let arr = data;
    arr.splice(index, 1);
    setData([...arr]); 
  }

  return (
    <div className="App">
      <Header />

    {/* Form Section */}

      <div className='form'>
        <Stack spacing={2} direction="row">
          <TextField
            value={name}
            onChange={(event) => setName(event.target.value)}
            id="outlined-basic"
            label="Name"
            variant="outlined"
          />
          <TextField 
            value={email} 
            onChange={(event) => setEmail(event.target.value)} 
            id="outlined-basic" 
            label="Email" 
            variant="outlined" 
          />
          <Button onClick={addData} color='success' variant="contained">
            <AddIcon />
          </Button>
        </Stack>
      </div>

    {/* Data Section */}

    <div className='data'>
      <div className='record'>
          <h4>Name</h4>
          <h4>Email</h4>
          <h4>Remove</h4>
        </div>
    </div>
      {
        data.map((element, index) => {
          return(
            <div key={index} className='record record-list'>
            <p>{element.name}</p>
            <p>{element.email}</p>
            <Stack>
                <Button onClick={removeItem} color="error" variant="contained"> <DeleteIcon /></Button>
            </Stack>
          </div>
          );
        })
      }
    </div>
  );
}

export default App;
