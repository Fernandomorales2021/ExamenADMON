import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mssql: {schema: 'dbo', table: 'vTransaccionesCliente'}}
})
export class VTransaccionesCliente extends Entity {
  @property({
    type: 'date',
    required: true,
    mssql: {columnName: 'Fecha', dataType: 'date', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  fecha: string;

  @property({
    type: 'string',
    required: true,
    length: 50,
    mssql: {columnName: 'Nombre', dataType: 'nvarchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
    length: 50,
    mssql: {columnName: 'Producto', dataType: 'nvarchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  producto: string;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    mssql: {columnName: 'Cantidad', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO'},
  })
  cantidad: number;

  @property({
    type: 'number',
    required: true,
    precision: 53,
    mssql: {columnName: 'Precio', dataType: 'float', dataLength: null, dataPrecision: 53, dataScale: null, nullable: 'NO'},
  })
  precio: number;

  @property({
    type: 'number',
    required: true,
    precision: 53,
    mssql: {columnName: 'CostoTotal', dataType: 'float', dataLength: null, dataPrecision: 53, dataScale: null, nullable: 'NO'},
  })
  costoTotal: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<VTransaccionesCliente>) {
    super(data);
  }
}

export interface VTransaccionesClienteRelations {
  // describe navigational properties here
}

export type VTransaccionesClienteWithRelations = VTransaccionesCliente & VTransaccionesClienteRelations;
