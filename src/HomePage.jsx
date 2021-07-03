import {
  Box,
  Container,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    margin: '1.0em 0em',
  },
  boxWrapper: {
    margin: '1.0em 0em',
  },
}));

export default function HomePage() {
  const classes = useStyles();

  return (
    <Container className={classes.root} maxWidth="lg">
      <Grid container>
        <Grid item xs={12}>
          <Box className={classes.boxWrapper}>
            <Typography variant="h3">Daily Report</Typography>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Box className={classes.boxWrapper}>
            <TextField
              id="goal"
              label="Today Goal"
              placeholder="구체적이고(Specific),  측정 가능하며(Measurable),  성취할 수 있고(Attainable),  현실적이며(Realistic),  시간 계획(Timeline)이 가능한"
              helperText="오늘의 SMART한 목표는 무엇인가요?"
              variant="outlined"
              fullWidth
              multiline
              rows="3"
            />
          </Box>
        </Grid>

        <Grid item xs={4}>
          <Box className={classes.boxWrapper}>To-Do List</Box>
        </Grid>
        <Grid item xs={8}>
          <Box className={classes.boxWrapper}>Time Table</Box>
        </Grid>

        <Grid item xs={12}>
          <Box className={classes.boxWrapper}>
            <TextField
              id="review"
              label="Today Review"
              placeholder="오늘 하루는 1분 1초도 버리지 않은 하루였나요?  아니면 한 것도 없는데 벌써 하루가 끝났나요?"
              helperText="일단 적기 시작하면 변화는 무조건 온다! 리뷰를!!!"
              variant="outlined"
              fullWidth
              multiline
              rows="6"
              rowsMax="20"
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
