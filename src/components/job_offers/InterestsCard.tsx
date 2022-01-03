import { interests } from '../../data/interests'
import { WhiteBlock } from '../shared/WhiteBlock'

export const InterestsCard = () => {
  return (
    <WhiteBlock>
      <h2 className="text-2xl font-bold text-center text-blue">興味・関心</h2>
      <div>
        {interests.map((interest) => {
          return (
            <div key={interest.field} className="first:border-0 border-t border-border">
              <h3 className="mt-4 mb-2 text-lg font-bold text-gray">{interest.field}</h3>
              <ul className="pl-5 mb-4 list-disc">
                {interest.contents.map((content) => {
                  return (
                    <li key={content} className="text-gray sm:mt-1">
                      {content}
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </div>
    </WhiteBlock>
  )
}
