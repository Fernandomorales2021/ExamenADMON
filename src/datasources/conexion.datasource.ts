import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'conexion',
  connector: 'mssql',
  url: 'mssql://Fernando:Software2021@DESKTOP-15UB8OD/MercaditoADMON',
  host: 'DESKTOP-15UB8OD',
  port: 1433,
  user: 'Fernando',
  password: 'Software2021',
  database: 'MercaditoADMON'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class ConexionDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'conexion';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.conexion', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
