import React from 'react'
import '../styles/TagComponent.scss';


const TagComponent = (props) => {

    const updateCurrentStep = (title) => {
        props.setCurrentStep(props.currentStep + 1)
        if (props.currentStep == 1) {
            props.updateTagsList(props.secondStepList)
            props.setPickedIndustry(title)
        } else if (props.currentStep == 2) {
            props.updateTagsList(props.thirdStepList)
            props.setPickedProblem(title)
        } else if (props.currentStep == 3) {
            // props.updateTagsList(props.thirdStepList)
            props.setPickedEngagement(title)
        }
    }

    return (
        <div className='tag-component' onClick={() => updateCurrentStep(props.title)}>
            <p>{props.title}</p>
        </div>
    )
}

export default TagComponent