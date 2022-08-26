import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import env from "../env.json";
import {createStyles, makeStyles} from "@mui/styles";
import LoadingButton from '@mui/material/Button';

const useStyles = makeStyles(() =>
    createStyles({
        formBlock: {
            maxWidth: 1200,
            margin: '50px auto'
        },
        label: {
            display: 'block',
            marginBottom: 10,
            textAlign: 'left'
        },
        input: {
            width: '100%',
            height: 20,
            marginBottom: 20
        },
        note: {
            fontSize: 22,
            margin: "15px 0",
            fontWeight: 500
        }
    })
)

function Note() {
    let { noteURL } = useParams();
    const [noteText, setNoteText] = useState('');
    const [lineClass, setlineClass] = useState('hide');
    const [formClass, setFormClass] = useState('hide');
    const [errorClass, setErrorClass] = useState('hide');

    useEffect(() => {
        if (noteURL !== undefined) {
            fetch(env.urlBackend, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify({"url" : noteURL})
            })
                .then(response => response.json())
                .then(response => {
                    console.log(response);
                    if (response.result) {
                        setNoteText(response.note);
                        setlineClass('');
                        setFormClass('hide');
                        setErrorClass('hide');
                    }
                    else if (!response.result) {
                        setlineClass('hide');
                        setFormClass('hide');
                        setErrorClass('');
                    }
                })
        }
        else {
            setlineClass('hide');
            setFormClass('');
            setErrorClass('hide');
        }
    }, []);

    function getNote(event) {
        event.preventDefault();
        let url = event.target.elements.url.value;
            url = url.trim();
        if (url === '') {
            alert('заполните поля');
            return false;
        }
        noteURL = url;
        window.location.href = env.url+"/"+url;
    }

    function searchNote() {
        window.location.href = env.url;
    }
    const classes = useStyles();
    return (
        <div className={classes.formBlock}>
            <div className={lineClass}>
                <h4 className={classes.label}>Note:</h4>
                <div className={classes.note}>{noteText}</div>
                <div>
                    <LoadingButton onClick={searchNote} loading variant="contained">
                        Смотреть еще один note
                    </LoadingButton>
                </div>
            </div>
            <div className={errorClass}>
                <p>Произошла ошибка. Такой хеш не найден</p>
            </div>
            <div className={formClass}>
                <form className="" action="" onSubmit={getNote}>
                    <label className={classes.label} htmlFor="url">Введите hash заметки</label>
                    <input className={classes.input} type="text" name="url" id="url"/>
                    <LoadingButton type="submit"  loading variant="contained">
                        Искать Note
                    </LoadingButton>
                </form>
            </div>
        </div>
    );
}

export default Note;
