import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mssql: {schema: 'dbo', table: 'vPrecio30'}}})
export class VPrecio30 extends Entity {
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

  constructor(data?: Partial<VPrecio30>) {
    super(data);
  }
}

export interface VPrecio30Relations {
  // describe navigational properties here
}

export type VPrecio30WithRelations = VPrecio30 & VPrecio30Relations;
