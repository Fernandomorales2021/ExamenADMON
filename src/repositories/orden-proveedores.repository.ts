import {DefaultCrudRepository} from '@loopback/repository';
import {OrdenProveedores, OrdenProveedoresRelations} from '../models';
import {ConexionDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class OrdenProveedoresRepository extends DefaultCrudRepository<
  OrdenProveedores,
  typeof OrdenProveedores.prototype.id,
  OrdenProveedoresRelations
> {
  constructor(
    @inject('datasources.conexion') dataSource: ConexionDataSource,
  ) {
    super(OrdenProveedores, dataSource);
  }
}
