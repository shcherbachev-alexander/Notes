import {createStyles, makeStyles} from "@mui/styles";

const useStyles = makeStyles(() =>
    createStyles({
        errorWrapper: {
            textAlign: 'center',
            margin: '50px auto',
            fontSize: 36,
            fontWeight: 900
        },
    })
)

function Error() {
    const classes = useStyles();
    return (
        <div className={classes.errorWrapper}>
            404
        </div>
    );
}

export default Error;
