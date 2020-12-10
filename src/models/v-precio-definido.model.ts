import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mssql: {schema: 'dbo', table: 'vPrecioDefinido'}}
})
export class VPrecioDefinido extends Entity {
  @property({
    type: 'string',
    required: true,
    length: 50,
    mssql: {columnName: 'Nombre', dataType: 'nvarchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  nombre: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<VPrecioDefinido>) {
    super(data);
  }
}

export interface VPrecioDefinidoRelations {
  // describe navigational properties here
}

export type VPrecioDefinidoWithRelations = VPrecioDefinido & VPrecioDefinidoRelations;
