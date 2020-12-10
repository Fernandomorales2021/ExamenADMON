import {DefaultCrudRepository} from '@loopback/repository';
import {VPagosClientes, VPagosClientesRelations} from '../models';
import {ConexionDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class VPagosClientesRepository extends DefaultCrudRepository<
  VPagosClientes,
  typeof VPagosClientes.prototype.id,
  VPagosClientesRelations
> {
  constructor(
    @inject('datasources.conexion') dataSource: ConexionDataSource,
  ) {
    super(VPagosClientes, dataSource);
  }
}
