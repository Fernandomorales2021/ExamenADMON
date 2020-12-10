import {DefaultCrudRepository} from '@loopback/repository';
import {PagosClientes, PagosClientesRelations} from '../models';
import {ConexionDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PagosClientesRepository extends DefaultCrudRepository<
  PagosClientes,
  typeof PagosClientes.prototype.id,
  PagosClientesRelations
> {
  constructor(
    @inject('datasources.conexion') dataSource: ConexionDataSource,
  ) {
    super(PagosClientes, dataSource);
  }
}
