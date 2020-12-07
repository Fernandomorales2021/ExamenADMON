import {DefaultCrudRepository} from '@loopback/repository';
import {Proveedor, ProveedorRelations} from '../models';
import {ConexionDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ProveedorRepository extends DefaultCrudRepository<
  Proveedor,
  typeof Proveedor.prototype.id,
  ProveedorRelations
> {
  constructor(
    @inject('datasources.conexion') dataSource: ConexionDataSource,
  ) {
    super(Proveedor, dataSource);
  }
}
