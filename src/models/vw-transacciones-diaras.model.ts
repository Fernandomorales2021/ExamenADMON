import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mssql: {schema: 'dbo', table: 'vwTransaccionesDiaras'}}
})
export class VwTransaccionesDiaras extends Entity {
  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    mssql: {columnName: 'Id Venta', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO'},
  })
  idVenta: number;

  @property({
    type: 'string',
    length: 50,
    mssql: {columnName: 'Nombre de Cliente', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  nombreDeCliente?: string;

  @property({
    type: 'string',
    length: 50,
    mssql: {columnName: 'Nombre de Producto Vendido', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  nombreDeProductoVendido?: string;

  @property({
    type: 'string',
    required: true,
    length: 50,
    mssql: {columnName: 'Categoria del Producto', dataType: 'nvarchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  categoriaDelProducto: string;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    mssql: {columnName: 'Cantidad de Producto Vendido', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO'},
  })
  cantidadDeProductoVendido: number;

  @property({
    type: 'number',
    precision: 53,
    mssql: {columnName: 'Precio de Venta', dataType: 'float', dataLength: null, dataPrecision: 53, dataScale: null, nullable: 'YES'},
  })
  precioDeVenta?: number;

  @property({
    type: 'date',
    required: true,
    mssql: {columnName: 'Fecha de Venta', dataType: 'date', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  fechaDeVenta: string;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    mssql: {columnName: 'Orden de Compra', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO'},
  })
  ordenDeCompra: number;

  @property({
    type: 'string',
    length: 50,
    mssql: {columnName: 'Producto Comprado', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  productoComprado?: string;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    mssql: {columnName: 'Cantidad de Producto Comprado', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO'},
  })
  cantidadDeProductoComprado: number;

  @property({
    type: 'number',
    required: true,
    precision: 53,
    mssql: {columnName: 'Costo del Producto', dataType: 'float', dataLength: null, dataPrecision: 53, dataScale: null, nullable: 'NO'},
  })
  costoDelProducto: number;

  @property({
    type: 'string',
    length: 50,
    mssql: {columnName: 'Nombre del Proveedor', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  nombreDelProveedor?: string;

  @property({
    type: 'date',
    mssql: {columnName: 'Fecha de Orden', dataType: 'date', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  fechaDeOrden?: string;

  @property({
    type: 'date',
    mssql: {columnName: 'Fecha de Entrega', dataType: 'date', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  fechaDeEntrega?: string;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mssql: {columnName: 'Cantidad en Inventario', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'YES'},
  })
  cantidadEnInventario?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<VwTransaccionesDiaras>) {
    super(data);
  }
}

export interface VwTransaccionesDiarasRelations {
  // describe navigational properties here
}

export type VwTransaccionesDiarasWithRelations = VwTransaccionesDiaras & VwTransaccionesDiarasRelations;
