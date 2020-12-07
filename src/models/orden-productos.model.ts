import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mssql: {schema: 'dbo', table: 'OrdenProductos'}}
})
export class OrdenProductos extends Entity {
  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    id: 1,
    mssql: {columnName: 'id', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO'},
  })
  id: number;

  @property({
    type: 'string',
    required: true,
    length: 50,
    mssql: {columnName: 'ordenId', dataType: 'nvarchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  ordenId: string;

  @property({
    type: 'string',
    required: true,
    length: 50,
    mssql: {columnName: 'productoId', dataType: 'nvarchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  productoId: string;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    mssql: {columnName: 'cantidad', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO'},
  })
  cantidad: number;

  @property({
    type: 'number',
    required: true,
    precision: 53,
    mssql: {columnName: 'costo', dataType: 'float', dataLength: null, dataPrecision: 53, dataScale: null, nullable: 'NO'},
  })
  costo: number;

  @property({
    type: 'number',
    required: true,
    precision: 24,
    mssql: {columnName: 'precioSugerido', dataType: 'real', dataLength: null, dataPrecision: 24, dataScale: null, nullable: 'NO'},
  })
  precioSugerido: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<OrdenProductos>) {
    super(data);
  }
}

export interface OrdenProductosRelations {
  // describe navigational properties here
}

export type OrdenProductosWithRelations = OrdenProductos & OrdenProductosRelations;
