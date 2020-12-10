import {DefaultCrudRepository} from '@loopback/repository';
import {VProductosCategoria, VProductosCategoriaRelations} from '../models';
import {ConexionDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class VProductosCategoriaRepository extends DefaultCrudRepository<
  VProductosCategoria,
  typeof VProductosCategoria.prototype.id,
  VProductosCategoriaRelations
> {
  constructor(
    @inject('datasources.conexion') dataSource: ConexionDataSource,
  ) {
    super(VProductosCategoria, dataSource);
  }
}
