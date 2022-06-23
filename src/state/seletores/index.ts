import { selector } from "recoil";
import { filtroEventos, listaDeEventosState } from "../atom";

export const eventosFiltradosState = selector({
  key: 'eventosFiltradosState',
  get: ({ get }) => {
    const filtro = get(filtroEventos)
    const todosEventos = get(listaDeEventosState)
    const eventos = todosEventos.filter(evento => {
      if(!filtro.data){
        return true
      }
      const isDay = filtro.data.toISOString().slice(0, 10) === evento.inicio.toISOString().slice(0, 10)
      return isDay
    })
    return eventos
  }
})