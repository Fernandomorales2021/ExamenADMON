import {DefaultCrudRepository} from '@loopback/repository';
import {LibroDiario, LibroDiarioRelations} from '../models';
import {ConexionDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class LibroDiarioRepository extends DefaultCrudRepository<
  LibroDiario,
  typeof LibroDiario.prototype.id,
  LibroDiarioRelations
> {
  constructor(
    @inject('datasources.conexion') dataSource: ConexionDataSource,
  ) {
    super(LibroDiario, dataSource);
  }
}
