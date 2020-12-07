import {DefaultCrudRepository} from '@loopback/repository';
import {Credito, CreditoRelations} from '../models';
import {ConexionDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CreditoRepository extends DefaultCrudRepository<
  Credito,
  typeof Credito.prototype.id,
  CreditoRelations
> {
  constructor(
    @inject('datasources.conexion') dataSource: ConexionDataSource,
  ) {
    super(Credito, dataSource);
  }
}
