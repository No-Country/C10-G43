export const convertirFecha = (fecha) => {
  const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  const partes = fecha.split("/");
  const dia = parseInt(partes[0]);
  const mes = meses[parseInt(partes[1]) - 1];
  const fechaObj = new Date(`${partes[2]}-${partes[1]}-${partes[0]}`);
  const diaSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"][
    fechaObj.getDay()
  ];
  return `${diaSemana}, ${dia} de ${mes}`;
};
