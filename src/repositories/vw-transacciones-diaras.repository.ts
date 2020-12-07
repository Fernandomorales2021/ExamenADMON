import {DefaultCrudRepository} from '@loopback/repository';
import {VwTransaccionesDiaras, VwTransaccionesDiarasRelations} from '../models';
import {ConexionDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class VwTransaccionesDiarasRepository extends DefaultCrudRepository<
  VwTransaccionesDiaras,
  typeof VwTransaccionesDiaras.prototype.id,
  VwTransaccionesDiarasRelations
> {
  constructor(
    @inject('datasources.conexion') dataSource: ConexionDataSource,
  ) {
    super(VwTransaccionesDiaras, dataSource);
  }
}
