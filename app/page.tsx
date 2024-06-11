import { Grid, Divider } from '@mui/material';
import { Video } from './components/Video';
import { Intro } from './components/Intro';
import { Problems } from './components/Problems';
import { Tutorial } from './components/Tutorial';

export default function Home() {
  return (
      <div style={{paddingTop: '5rem'}}>
        <Intro />
        <Divider style={{margin: '2rem 0', backgroundColor: 'gray'}}/>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Video src="woody.mp4"/>
          </Grid>
          <Grid item xs={4}>
            <Video src="faustao.mp4"/>
          </Grid>
          <Grid item xs={4}>
            <Video src="harry.mp4"/>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Video src="chaves.mp4"/>
          </Grid>
          <Grid item xs={4}>
            <Video src="coringa.mp4"/>
          </Grid>
          <Grid item xs={4}>
            <Video src="narrador.mp4"/>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            
          </Grid>
          <Grid item xs={4}>
            <Video src="lula.mp4"/>
          </Grid>
          <Grid item xs={4}>
            
          </Grid>
        </Grid>
        <Divider style={{margin: '2rem 0', backgroundColor: 'gray'}}/>
        <div style={{paddingTop: '2rem', paddingBottom: '2rem'}}>
          <Tutorial />
        </div>
        <Divider style={{margin: '2rem 0', backgroundColor: 'gray'}}/>
        <div style={{paddingTop: '2rem', paddingBottom: '2rem'}}>
          <Problems/>
        </div>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Video src="ednaldoRuimMelhor.mp4"/>
          </Grid>
          <Grid item xs={4}>
            <Video src="lulaRuim.mp4"/>
          </Grid>
        </Grid>
      </div>
  );
}
