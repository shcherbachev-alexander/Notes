import React from 'react';
import { useState } from 'react';
import env from "../env.json";
import {createStyles, makeStyles} from "@mui/styles";
import LoadingButton from '@mui/material/Button';

const useStyles = makeStyles(() =>
    createStyles({
        formBlock: {
            maxWidth: 1200,
            margin: '50px auto'
        },
        form: {
            textAlign: 'right'
        },
        label: {
            display: 'block',
            marginBottom: 10,
            textAlign: 'left'
        },
        input: {
            width: '100%',
            minHeight: 50,
            marginBottom: 20
        },
        note: {
            fontSize: 22,
            marginBottom: 15,
            fontWeight: 900
        }
    })
)

function Create() {

    const [url, setUrl] = useState('');
    const [lineClass, setLineClass] = useState('hide'); //скрываем
    const [formClass, setFormClass] = useState('');

    let sendData = (obj) => {
        setFormClass('hide');
        setLineClass('');
        fetch(env.urlBackend, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(obj)
        })
            .then(response => response.json())
            .then(response => {
                console.log(response);
                if (response.result) {
                    setUrl(env.url+"/"+response.url);
                }
            })
    }

    let loadDataFromForm = (event) => {
        event.preventDefault();
        let note = event.target.elements.note.value;
        note = note.trim();
        if (note === '') {
            alert('заполните поля');
            return false;
        }
        sendData({"note": note});
    }
    const classes = useStyles();
    return (
        <div className={classes.formBlock}>
            <form onSubmit={loadDataFromForm} className={formClass}>
                <label className={classes.label} htmlFor="">Введите заметку</label>
                <textarea className={classes.input} name="note" id="note" defaultValue="Test"></textarea>
                <LoadingButton type="submit"  loading variant="contained">
                    Создать
                </LoadingButton>
            </form>
            <div className={lineClass}>
                <div className={classes.note}>{url}</div>
                <div>
                    <LoadingButton onClick={function (){window.location.reload()}} type="submit"  loading variant="contained">
                        Создать новую заметку
                    </LoadingButton>
                </div>
            </div>
        </div>
    );
}

export default Create;
