import { FC, Fragment } from "react"
import { isString } from "lodash"
import { SectionKey, sectionMap } from './source'

export const BuildPage: FC<{ sections?: PageSectionDynamicZone[] }> = ({ sections }) => {
  return <Fragment>
    {sections?.map((section, index) => {
      if (!('__typename' in section && isString(section?.__typename))) return null
      if (!( section?.__typename in sectionMap )) return null
      if ('code' in section || !('id' in section)) return null

      const Section = sectionMap[section?.__typename as SectionKey]

      if (!Section) return null

      return <Section key={`${index}_${section?.id}`} {...section} />
    })}
  </Fragment>
}
