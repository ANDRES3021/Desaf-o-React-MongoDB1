import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Types } from 'mongoose';

@Schema()
export class SpecialPrice extends Document {
  @Prop({ type: Types.ObjectId, required: true, ref: 'users' })
  usuarioId: Types.ObjectId;

  @Prop({ type: Types.ObjectId, required: true, ref: 'products' })
  articuloId: Types.ObjectId;

  @Prop({ required: true })
  precioEspecial: number;

  @Prop({ required: true })
  moneda: string;

  @Prop({ required: true })
  fechaInicio: Date;

  @Prop({ required: true })
  fechaFin: Date;

  @Prop({ default: true })
  activo: boolean;
}

export const SpecialPriceSchema = SchemaFactory.createForClass(SpecialPrice);
