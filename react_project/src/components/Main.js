import About from "./About";
import {createStyles, makeStyles} from "@mui/styles";
import Button from '@mui/material/Button';

const useStyles = makeStyles(() =>
    createStyles({
        buttonsWrapper: {
            display: 'flex',
            justifyContent: 'space-around',
            marginTop: 50,
        },
    })
)

function Main() {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.buttonsWrapper}>
                <Button variant="contained" href="/create">
                    Создать note
                </Button>
                <Button variant="contained" href="/note">
                    Просмотреть note
                </Button>
            </div>
            <About/>
        </div>
    );
}

export default Main;
