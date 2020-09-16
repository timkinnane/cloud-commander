import { awsServices } from './awsServices'

describe('[provider]', () => {
  describe('awsServices', () => {
    it('lists services', () => {
      expect(Object.keys(awsServices())).toEqual(
        expect.arrayContaining(['IAM', 'S3', 'DynamoDB', 'Lambda', 'SQS'])
      )
    })
  })
})
