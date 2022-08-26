import {createStyles, makeStyles} from "@mui/styles";

const useStyles = makeStyles(() =>
    createStyles({
        aboutBlock: {
            maxWidth: 1200,
            margin: '50px auto'
        },
        aboutList: {
            listStyle: 'disc',
            margin: '20px auto'
        }
    })
)

function About() {
    const classes = useStyles();
    return (
        <div className={classes.aboutBlock}>
            <strong>ShareNotes</strong> - сервис для обмена заметками. Создайте заметку, отправьте ссылку на заметку и ваш друг сможет ее просмотреть. После просмотра заметка будет удалена (или по истечении 15 минут с момента создания).

            Как сделать заметку?
            <ul className={classes.aboutList}>
                <li>Пройдите по ссылке</li>
                <li>Вставьте текст и нажмите Create</li>
                <li>Отправьте сгенерированный адрес другу!</li>
            </ul>
            Как прочитать заметку? Перейдите по присланному URL, либо введите адрес руками здесь.
        </div>
    );
}

export default About;
