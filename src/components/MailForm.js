import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';

import "../styles.css";
//eli tulis muuttaa pois luokkakomponentista hookiksi
//konstruktori pois. alkaa function MailForm(){}
//this pois. luodaan const [nimi, setNimi] = useState("")
// Lisää kiitosviesti lähetänapin painamisen jälkeen

export default function MailForm(){
    const [name, setName] = useState("")
    const [number, setNumber] = useState("")
    const [text, setText] = useState("Hei, haluan tilata palvelua")

    const handleName = e => {
        setName(e.target.value);
    }
    const handleNumber = e => {
        setNumber(e.target.value)
    }
    const handleText = e => {
        setText(e.target.value)
    }

    const handleSubmit = () => {
        alert("Viestisi on lähetetty :) Nimesi: " + name + ", viesti: " + text + ", Numero: " + number)
      }

    return (
        <div className="mailform">
            <h2>Ota yhteyttä:</h2>
            <form onSubmit={handleSubmit}>
            <div>
            <TextField id="outlined-basic" label="Nimi" variant="outlined" 
                type="text"
                onChange={handleName}
                value={name}
                margin="normal"
            />
            </div>
            <div>
            <TextField id="outlined-basic" label="Puhelinnumero" variant="outlined" 
                type="text"
                onChange={handleNumber}
                value={number}
                margin="normal"
            />
            </div>
            <div>
            <TextField
                onChange={handleText}
                value={text}
                placeholder="Kirjoita viestisi tähän :)"
                multiline
                rows={4}
                rowsMax={8}
                />
           </div>
           <div>
           <Button variant="contained" color="primary"
           className="btn form"
           onClick={handleSubmit}
            > Lähetä
            </Button>
            </div>
        </form>
        </div>
       );
    }



