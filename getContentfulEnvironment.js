import {Space} from "contentful-management";
import { EnvironmentGetter } from "contentful-typescript-codegen"

import contentfulManagement from "contentful-management"

const getContentfulEnvironment: EnvironmentGetter = () => {
  const contentfulClient = contentfulManagement.createClient({
    accessToken: process.env.CF_MANAGEMENT_TOKEN!,
  })

  return contentfulClient
    .getSpace(process.env.CF_SPACE_ID!)
    .then((space: Space )=> space.getEnvironment('master'))
}

export default getContentfulEnvironment;
