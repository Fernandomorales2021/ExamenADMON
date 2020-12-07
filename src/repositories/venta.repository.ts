import {DefaultCrudRepository} from '@loopback/repository';
import {Venta, VentaRelations} from '../models';
import {ConexionDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class VentaRepository extends DefaultCrudRepository<
  Venta,
  typeof Venta.prototype.id,
  VentaRelations
> {
  constructor(
    @inject('datasources.conexion') dataSource: ConexionDataSource,
  ) {
    super(Venta, dataSource);
  }
}
