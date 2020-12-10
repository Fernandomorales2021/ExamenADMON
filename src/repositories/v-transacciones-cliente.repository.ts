import {DefaultCrudRepository} from '@loopback/repository';
import {VTransaccionesCliente, VTransaccionesClienteRelations} from '../models';
import {ConexionDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class VTransaccionesClienteRepository extends DefaultCrudRepository<
  VTransaccionesCliente,
  typeof VTransaccionesCliente.prototype.id,
  VTransaccionesClienteRelations
> {
  constructor(
    @inject('datasources.conexion') dataSource: ConexionDataSource,
  ) {
    super(VTransaccionesCliente, dataSource);
  }
}
