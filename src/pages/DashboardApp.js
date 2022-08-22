import {useState} from 'react';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';
// sections
import {
  AppTasks,
  AppMyProces,
  AppCurrentVisits,
  AppPosit,
} from '../sections/@dashboard/app';

// userAuth
import useAuth from '../hooks/useAuth'


// ----------------------------------------------------------------------

export default function DashboardApp() {
  const theme = useTheme();
  const { userNameAuth } = useAuth();
  const [task, setTask] = useState([
      { id: 1, id_usuario: 1, label: 'Despachar TDR' },
      { id: 2, id_usuario: 1, label: 'Consultar Area requirente' },
      { id: 3, id_usuario: 2, label: 'Generar Quipux' },
      { id: 4, id_usuario: 2, label: 'Enviar expediente' },
      { id: 5, id_usuario: 3, label: 'Firmar actas' },
      { id: 6, id_usuario: 3, label: 'Solicitar cotizaciones AutoCAD' },
      { id: 7, id_usuario: 1, label: 'Terminar Estudio de Mercado' },
      { id: 8, id_usuario: 2, label: 'Solicitar certificaciones' }, 
  ])
  const [posit, setPosit] = useState([
    { id:1 ,id_usuario :1, nota:'Revisar TDR 1', from:'Jorge Cajamarca'},
    { id:2 ,id_usuario :1, nota:'Reunion de area', from:'Francisco Barros'},
    { id:3 ,id_usuario :1, nota:'Asiganacion de Porceso', from:'Alejandro Pinargote'},
    { id:4 ,id_usuario :1, nota:'Revision de pliegos', from:'Darwin Acosta'},
    { id:5 ,id_usuario :2, nota:'Despachar TDR', from:'Jorge Cajamarca'},
    { id:6 ,id_usuario :2, nota:'Revisar TDR 1', from:'Jorge Cajamarca'},
    { id:7 ,id_usuario :2, nota:'Reunion de area', from:'Francisco Barros'},
    { id:8 ,id_usuario :3, nota:'Asiganacion de Porceso', from:'Alejandro Pinargote'},
    { id:9 ,id_usuario :3, nota:'Revision de pliegos', from:'Darwin Acosta'},
    { id:10 ,id_usuario :3, nota:'Despachar TDR', from:'Jorge Cajamarca'},
  ])

  const procesosData = [
    { fase: 'Preparatoria', tipo: 'infima cuantia', proceso: 'Proceso de prueba 1', cuatrimestre: 'Primero', responsable: 'Jorge Cajamarca', administrador: 'Alejandro Pinargote', analista: 'Diana Vargas', history: [{ fecha: '26/07/2022', actividad: 'recoleccion de informacion', usuario: 'Jorge Cajamarca' }, { fecha: '26/07/2022', actividad: 'recoleccion de informacion', usuario: 'Jorge Cajamarca' }] },
    { fase: 'Contractual', tipo: 'Subasta Inversa', proceso: 'Proceso de prueba 2', cuatrimestre: 'Segundo', responsable: 'Julio Enriquez', administrador: 'Marcelo Proaño', analista: 'Javier Diaz', history: [{ fecha: '26/07/2022', actividad: 'recoleccion de informacion', usuario: 'Jorge Cajamarca' }, { fecha: '26/07/2022', actividad: 'recoleccion de informacion', usuario: 'Jorge Cajamarca' }] },
    { fase: 'Precontractual', tipo: 'Consultoria', proceso: 'Proceso de prueba 3', cuatrimestre: 'Tercero', responsable: 'Silvio Sabando', administrador: 'Darwin Acosta', analista: 'Marjurie Peralta', history: [{ fecha: '26/07/2022', actividad: 'recoleccion de informacion', usuario: 'Jorge Cajamarca' }, { fecha: '26/07/2022', actividad: 'recoleccion de informacion', usuario: 'Jorge Cajamarca' }] },
    { fase: 'Preparatoria', tipo: 'infima cuantia', proceso: 'Proceso de prueba 4', cuatrimestre: 'Primero', responsable: 'Jorge Cajamarca', administrador: 'Alejandro Pinargote', analista: 'Diana Vargas', history: [{ fecha: '26/07/2022', actividad: 'recoleccion de informacion', usuario: 'Jorge Cajamarca' }, { fecha: '26/07/2022', actividad: 'recoleccion de informacion', usuario: 'Jorge Cajamarca' }] },
    { fase: 'Contractual', tipo: 'Subasta Inversa', proceso: 'Proceso de prueba 5', cuatrimestre: 'Segundo', responsable: 'Julio Enriquez', administrador: 'Marcelo Proaño', analista: 'Javier Diaz', history: [{ fecha: '26/07/2022', actividad: 'recoleccion de informacion', usuario: 'Jorge Cajamarca' }, { fecha: '26/07/2022', actividad: 'recoleccion de informacion', usuario: 'Jorge Cajamarca' }] },
    { fase: 'Finalizado', tipo: 'Consultoria', proceso: 'Proceso de prueba 6', cuatrimestre: 'Tercero', responsable: 'Silvio Sabando', administrador: 'Darwin Acosta', analista: 'Marjurie Peralta', history: [{ fecha: '26/07/2022', actividad: 'recoleccion de informacion', usuario: 'Jorge Cajamarca' }, { fecha: '26/07/2022', actividad: 'recoleccion de informacion', usuario: 'Jorge Cajamarca' }] },
    { fase: 'Contractual', tipo: 'Subasta Inversa', proceso: 'Proceso de prueba 7', cuatrimestre: 'Primero', responsable: 'Jorge Cajamarca', administrador: 'Alejandro Pinargote', analista: 'Diana Vargas', history: [{ fecha: '26/07/2022', actividad: 'recoleccion de informacion', usuario: 'Jorge Cajamarca' }, { fecha: '26/07/2022', actividad: 'recoleccion de informacion', usuario: 'Jorge Cajamarca' }] },
    { fase: 'Preparatoria', tipo: 'infima cuantia', proceso: 'Proceso de prueba 8', cuatrimestre: 'Segundo', responsable: 'Julio Enriquez', administrador: 'Marcelo Proaño', analista: 'Javier Diaz', history: [{ fecha: '26/07/2022', actividad: 'recoleccion de informacion', usuario: 'Jorge Cajamarca' }, { fecha: '26/07/2022', actividad: 'recoleccion de informacion', usuario: 'Jorge Cajamarca' }] },
  ]

  return (
    <Page title="Dashboard">
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          {`Hola ${userNameAuth[0]?.name}, Bienvenido de regreso`}
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <AppPosit
            title="Notas"
            list={posit.filter(item => item.id_usuario === userNameAuth[0]?.id)}
            setPosit={setPosit}
            autor =  {`${userNameAuth[0]?.name} ${userNameAuth[0]?.lastName}`}
            />
          </Grid>

          {/* Task */}
          <Grid item xs={12} md={6} sm={12} lg={6}>
            <AppTasks
              title="Tareas"
              list={task.filter(item => item.id_usuario === userNameAuth[0]?.id)}
              setTaskDash={setTask}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppMyProces
              title="Mis Procesos"
              list={procesosData}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits
              title="Resumen de procesos"
              chartData={[
                { label: 'Asiganados', value: 4344 },
                { label: 'Precontractual', value: 5435 },
                { label: 'Preparatoria', value: 1443 },
                { label: 'Fianalizados', value: 4443 },
              ]}
              chartColors={[
                theme.palette.primary.main,
                theme.palette.chart.blue[0],
                theme.palette.chart.violet[0],
                theme.palette.chart.yellow[0],
              ]}
            />
          </Grid>

        </Grid>
      </Container>
    </Page>
  );
}
