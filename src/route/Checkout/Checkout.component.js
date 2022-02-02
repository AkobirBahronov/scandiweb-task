import { Checkout as SourceCheckout } from "SourceRoute/Checkout/Checkout.component";

import "./Checkout.extension.style";

class Checkout extends SourceCheckout {
  constructor() {
    super();
  }
  render() {
    const stepValues = Object.values(this.stepMap);
    const stepKeys = Object.keys(this.stepMap);
    const currentStep = this.props.checkoutStep;

    
    let currentStepIndex = 0;
    
    for (var i = 0; i < stepKeys.length; i++) {
        if (stepKeys[i] === currentStep) {
            currentStepIndex = i;
        }
    }
    
    stepValues.pop();

    const progressBar = (
      <div class="stepper-horizontal">
        <div class="step done">
          <div class="step-bar-left"></div>
          <div class="step-bar-right"></div>
        </div>
        {stepValues.map((stepValue, id) => {
          return (
            <div class={currentStepIndex <= id ? "step editing" : "step done"}>
              <div class={"step-circle"}>
                <span>{currentStepIndex <= id ? id + 1 : "✓"}</span>
              </div>
              <div class="step-title">{stepValue.title.value}</div>
              <div class="step-bar-left"></div>
              <div class="step-bar-right"></div>
            </div>
          );
        })}
        <div class="step editing">
          <div class="step-bar-left"></div>
          <div class="step-bar-right"></div>
        </div>
      </div>
    );

    return (
      <>
        {progressBar}
        {super.render()}
      </>
    );
  }
}

export default Checkout;
