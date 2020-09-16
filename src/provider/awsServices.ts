import AWS, { Service } from 'aws-sdk'

type ServiceKey = keyof typeof AWS
interface Services { [key: string]: typeof Service }

function isService (entity: unknown): entity is typeof Service {
  return typeof entity === 'function' && (entity).name !== 'Service'
}

export const awsServices = (): Services => {
  const services: Services = {}
  Object.keys(AWS)
    .filter(key => isService(AWS[key as ServiceKey]))
    .reduce((memo, key) => {
      const entity = AWS[key as ServiceKey]
      if (isService(entity)) memo[key] = entity
      return memo
    }, services)
  return services
}
