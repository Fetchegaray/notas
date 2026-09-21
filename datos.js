/* Datos que se actualizan solos cada mañana.
   Los reescribe la tarea programada "Pronóstico y mareas del viaje a la Patagonia".
   Formato: fechas ISO (YYYY-MM-DD), horas locales de Argentina. */
window.DATOS = {
  actualizado: "2026-09-20T20:12:00-03:00",
  nota: "Puerto Pirámides toma el pronóstico de Puerto Madryn, que es la estación más cercana.",

  /* clima[lugar][fecha] = {d: descripción, max, min, v: viento km/h, vd: dirección, p: lluvia} */
  clima: {
    "bahia-blanca": {
      "2026-09-27": {d:"Intervalos nubosos con chubascos débiles", max:19, min:12, v:"18", p:"0,8 mm"},
      "2026-09-28": {d:"Intervalos nubosos con chubascos",         max:18, min:10, v:"15", p:"7,5 mm"},
      "2026-09-29": {d:"Cubierto con llovizna",                    max:14, min:9,  v:"15"},
      "2026-09-30": {d:"Cubierto con llovizna",                    max:11, min:8,  v:"24"}
    },
    "puerto-madryn": {
      "2026-09-27": {d:"Intervalos nubosos con chubascos",         max:15, min:6, v:"23", p:"4,6 mm"},
      "2026-09-28": {d:"Intervalos nubosos con chubascos débiles", max:14, min:5, v:"22", p:"4 mm"},
      "2026-09-29": {d:"Cubierto con llovizna",                    max:12, min:4, v:"23", p:"1,8 mm"},
      "2026-09-30": {d:"Intervalos nubosos con chubascos débiles", max:13, min:3, v:"24", p:"1,7 mm"},
      "2026-10-01": {d:"Intervalos nubosos",                       max:15, min:5, v:"26", p:"sin lluvia"},
      "2026-10-02": {d:"Intervalos nubosos",                       max:16, min:6, v:"25", p:"sin lluvia"},
      "2026-10-03": {d:"Intervalos nubosos",                       max:16, min:6, v:"28", p:"sin lluvia"}
    },
    "puerto-piramides": {
      "2026-09-29": {d:"Cubierto con llovizna", max:12, min:4, v:"23", p:"1,8 mm"}
    },
    "las-grutas": {
      "2026-09-27": {d:"Intervalos nubosos",    max:13, min:10, v:"17", p:"sin lluvia"},
      "2026-09-28": {d:"Cubierto con llovizna", max:13, min:9,  v:"17", p:"8,2 mm"}
    }
  },

  /* mareas[lugar][fecha] = [{t:"pleamar"|"bajamar", h:"HH:MM", m: metros}] */
  mareas: {
    "las-grutas": {
      "2026-09-27": [{t:"pleamar",h:"00:01",m:7.4},{t:"bajamar",h:"06:21",m:1.1},{t:"pleamar",h:"12:27",m:7.6},{t:"bajamar",h:"18:43",m:1.3}],
      "2026-09-28": [{t:"pleamar",h:"00:42",m:7.6},{t:"bajamar",h:"07:00",m:1.0},{t:"pleamar",h:"13:05",m:7.8},{t:"bajamar",h:"19:21",m:1.1}],
      "2026-09-29": [{t:"pleamar",h:"01:23",m:7.8},{t:"bajamar",h:"07:38",m:1.0},{t:"pleamar",h:"13:43",m:7.9},{t:"bajamar",h:"19:57",m:0.9}],
      "2026-09-30": [{t:"pleamar",h:"02:05",m:7.9},{t:"bajamar",h:"08:15",m:1.0},{t:"pleamar",h:"14:23",m:8.0},{t:"bajamar",h:"20:35",m:0.8}]
    },
    "puerto-piramides": {
      "2026-09-27": [{t:"pleamar",h:"02:53",m:4.9},{t:"bajamar",h:"08:21",m:0.7},{t:"pleamar",h:"15:15",m:4.9},{t:"bajamar",h:"20:36",m:0.8}],
      "2026-09-28": [{t:"pleamar",h:"03:32",m:5.1},{t:"bajamar",h:"08:59",m:0.6},{t:"pleamar",h:"15:53",m:5.1},{t:"bajamar",h:"21:17",m:0.7}],
      "2026-09-29": [{t:"pleamar",h:"04:10",m:5.2},{t:"bajamar",h:"09:37",m:0.6},{t:"pleamar",h:"16:29",m:5.2},{t:"bajamar",h:"21:59",m:0.5}],
      "2026-09-30": [{t:"pleamar",h:"04:47",m:5.3},{t:"bajamar",h:"10:17",m:0.6},{t:"pleamar",h:"17:07",m:5.2},{t:"bajamar",h:"22:43",m:0.5}]
    }
  }
};
