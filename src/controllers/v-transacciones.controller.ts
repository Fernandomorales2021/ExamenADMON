import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {VwTransaccionesDiaras} from '../models';
import {VwTransaccionesDiarasRepository} from '../repositories';

export class VTransaccionesController {
  constructor(
    @repository(VwTransaccionesDiarasRepository)
    public vwTransaccionesDiarasRepository : VwTransaccionesDiarasRepository,
  ) {}

  @post('/vw-transacciones-diaras', {
    responses: {
      '200': {
        description: 'VwTransaccionesDiaras model instance',
        content: {'application/json': {schema: getModelSchemaRef(VwTransaccionesDiaras)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(VwTransaccionesDiaras, {
            title: 'NewVwTransaccionesDiaras',
            exclude: ['id'],
          }),
        },
      },
    })
    vwTransaccionesDiaras: Omit<VwTransaccionesDiaras, 'id'>,
  ): Promise<VwTransaccionesDiaras> {
    return this.vwTransaccionesDiarasRepository.create(vwTransaccionesDiaras);
  }

  @get('/vw-transacciones-diaras/count', {
    responses: {
      '200': {
        description: 'VwTransaccionesDiaras model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(VwTransaccionesDiaras) where?: Where<VwTransaccionesDiaras>,
  ): Promise<Count> {
    return this.vwTransaccionesDiarasRepository.count(where);
  }

  @get('/vw-transacciones-diaras', {
    responses: {
      '200': {
        description: 'Array of VwTransaccionesDiaras model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(VwTransaccionesDiaras, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(VwTransaccionesDiaras) filter?: Filter<VwTransaccionesDiaras>,
  ): Promise<VwTransaccionesDiaras[]> {
    return this.vwTransaccionesDiarasRepository.find(filter);
  }

  @patch('/vw-transacciones-diaras', {
    responses: {
      '200': {
        description: 'VwTransaccionesDiaras PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(VwTransaccionesDiaras, {partial: true}),
        },
      },
    })
    vwTransaccionesDiaras: VwTransaccionesDiaras,
    @param.where(VwTransaccionesDiaras) where?: Where<VwTransaccionesDiaras>,
  ): Promise<Count> {
    return this.vwTransaccionesDiarasRepository.updateAll(vwTransaccionesDiaras, where);
  }

  @get('/vw-transacciones-diaras/{id}', {
    responses: {
      '200': {
        description: 'VwTransaccionesDiaras model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(VwTransaccionesDiaras, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(VwTransaccionesDiaras, {exclude: 'where'}) filter?: FilterExcludingWhere<VwTransaccionesDiaras>
  ): Promise<VwTransaccionesDiaras> {
    return this.vwTransaccionesDiarasRepository.findById(id, filter);
  }

  @patch('/vw-transacciones-diaras/{id}', {
    responses: {
      '204': {
        description: 'VwTransaccionesDiaras PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(VwTransaccionesDiaras, {partial: true}),
        },
      },
    })
    vwTransaccionesDiaras: VwTransaccionesDiaras,
  ): Promise<void> {
    await this.vwTransaccionesDiarasRepository.updateById(id, vwTransaccionesDiaras);
  }

  @put('/vw-transacciones-diaras/{id}', {
    responses: {
      '204': {
        description: 'VwTransaccionesDiaras PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() vwTransaccionesDiaras: VwTransaccionesDiaras,
  ): Promise<void> {
    await this.vwTransaccionesDiarasRepository.replaceById(id, vwTransaccionesDiaras);
  }

  @del('/vw-transacciones-diaras/{id}', {
    responses: {
      '204': {
        description: 'VwTransaccionesDiaras DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.vwTransaccionesDiarasRepository.deleteById(id);
  }
}
