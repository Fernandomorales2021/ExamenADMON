import {DefaultCrudRepository} from '@loopback/repository';
import {Inventario, InventarioRelations} from '../models';
import {ConexionDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class InventarioRepository extends DefaultCrudRepository<
  Inventario,
  typeof Inventario.prototype.id,
  InventarioRelations
> {
  constructor(
    @inject('datasources.conexion') dataSource: ConexionDataSource,
  ) {
    super(Inventario, dataSource);
  }
}
