import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class ViewOptions extends PureComponent {
  onRenderMinuteHandChange = (event) => {
    const { setState } = this.props;

    const { checked } = event.target;

    setState({ renderMinuteHand: checked });
  }

  onRenderSecondHandChange = (event) => {
    const { setState } = this.props;

    const { checked } = event.target;

    setState({ renderSecondHand: checked });
  }

  onRenderHourMarksChange = (event) => {
    const { setState } = this.props;

    const { checked } = event.target;

    setState({ renderHourMarks: checked });
  }

  onRenderMinuteMarksChange = (event) => {
    const { setState } = this.props;

    const { checked } = event.target;

    setState({ renderMinuteMarks: checked });
  }

  onRenderNumbersChange = (event) => {
    const { setState } = this.props;

    const { checked } = event.target;

    setState({ renderNumbers: checked });
  }

  render() {
    const {
      renderHourMarks,
      renderMinuteHand,
      renderMinuteMarks,
      renderNumbers,
      renderSecondHand,
    } = this.props;

    return (
      <fieldset id="viewoptions">
        <legend htmlFor="viewoptions">
          View options
        </legend>

        <div>
          <input
            id="renderMinuteHand"
            type="checkbox"
            checked={renderMinuteHand}
            onChange={this.onRenderMinuteHandChange}
          />
          <label htmlFor="renderMinuteHand">
            Show minute hand
          </label>
        </div>

        <div>
          <input
            id="renderSecondHand"
            type="checkbox"
            checked={renderSecondHand}
            onChange={this.onRenderSecondHandChange}
          />
          <label htmlFor="renderSecondHand">
            Show second hand
          </label>
        </div>

        <div>
          <input
            id="renderHourMarks"
            type="checkbox"
            checked={renderHourMarks}
            onChange={this.onRenderHourMarksChange}
          />
          <label htmlFor="renderHourMarks">
            Show hour marks
          </label>
        </div>

        <div>
          <input
            id="renderMinuteMarks"
            type="checkbox"
            checked={renderMinuteMarks}
            onChange={this.onRenderMinuteMarksChange}
          />
          <label htmlFor="renderMinuteMarks">
            Show minute marks
          </label>
        </div>

        <div>
          <input
            id="renderNumbers"
            type="checkbox"
            checked={renderNumbers}
            onChange={this.onRenderNumbersChange}
          />
          <label htmlFor="renderNumbers">
            Show numbers
          </label>
        </div>
      </fieldset>
    );
  }
}

ViewOptions.propTypes = {
  renderHourMarks: PropTypes.bool.isRequired,
  renderMinuteHand: PropTypes.bool.isRequired,
  renderMinuteMarks: PropTypes.bool.isRequired,
  renderNumbers: PropTypes.bool.isRequired,
  renderSecondHand: PropTypes.bool.isRequired,
  setState: PropTypes.func.isRequired,
};
