import * as AWS from 'aws-sdk'
import { SelectInput, AutoCompleteItem } from '..'
import { AutoCompleteInput } from '../AutoCompleteInput'

const serviceItems: AutoCompleteItem[] = Object.keys(AWS)
  .filter(key => console.log(typeof AWS[key]))
  .map(key => ({
    label: key,
    value: { service: key, module: new AWS[key] }
  }))

console.log({ serviceItems })

export const Services = () => (
  <AutoCompleteInput
    items={serviceItems}
  />
)
