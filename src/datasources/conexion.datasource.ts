import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'conexion',
  connector: 'mssql',
  url: 'mssql://Fernando2019_SQLLogin_1:5vp9iid2i6@MercaditoADMON.mssql.somee.com/MercaditoADMON',
  host: 'MercaditoADMON.mssql.somee.com',
  port: 1433,
  user: 'Fernando2019_SQLLogin_1',
  password: '5vp9iid2i6',
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
