import {DefaultCrudRepository} from '@loopback/repository';
import {VTransaccionesProveedor, VTransaccionesProveedorRelations} from '../models';
import {ConexionDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class VTransaccionesProveedorRepository extends DefaultCrudRepository<
  VTransaccionesProveedor,
  typeof VTransaccionesProveedor.prototype.id,
  VTransaccionesProveedorRelations
> {
  constructor(
    @inject('datasources.conexion') dataSource: ConexionDataSource,
  ) {
    super(VTransaccionesProveedor, dataSource);
  }
}
