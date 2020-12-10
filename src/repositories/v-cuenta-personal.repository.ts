import {DefaultCrudRepository} from '@loopback/repository';
import {VCuentaPersonal, VCuentaPersonalRelations} from '../models';
import {ConexionDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class VCuentaPersonalRepository extends DefaultCrudRepository<
  VCuentaPersonal,
  typeof VCuentaPersonal.prototype.id,
  VCuentaPersonalRelations
> {
  constructor(
    @inject('datasources.conexion') dataSource: ConexionDataSource,
  ) {
    super(VCuentaPersonal, dataSource);
  }
}
