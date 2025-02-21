export class CreateSpecialPriceDto {
  usuarioId: string;
  articuloId: string;
  precioEspecial: number;
  moneda: string;
  fechaInicio: Date;
  fechaFin: Date;
  activo?: boolean;
}
