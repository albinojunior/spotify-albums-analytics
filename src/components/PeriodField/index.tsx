import React, { Component } from 'react';

interface Props {
  years: string[];
  change(year: string): void;
  currentYear?: string; 
}

interface StateProps {
  year: string;
  index: number;
}

class PeriodField extends Component<Props, StateProps> {
  state = {
    year: '',
    index: 0,
  };

  componentWillReceiveProps(nextProps: Props) {
    const { years, change, currentYear } = nextProps;
    if (years.join(',') !== this.props.years.join(',')) {
      let index = years.length - 1;
      const year = years[index];
      this.setState({ year, index });
      change(year);
    }
    
    if(years.length && currentYear) {
      const index = years.indexOf(currentYear);
      const year = years[index];
      this.setState({ year, index });
    }
  }

  handleChange = (index: number) => () => {
    const { years, change } = this.props;
    const year = years[index];
    this.setState({ year, index });
    change(year);
  };

  render() {
    const { year, index } = this.state;
    const { years } = this.props;
    return (
      <div className="period-field">
        <button
          className="prev"
          title="Anterior"
          disabled={index === 0}
          onClick={this.handleChange(index - 1)}
        >
          <i />
        </button>
        <input
          name="period"
          title="Periodo"
          id="period"
          placeholder="Período"
          readOnly
          value={year}
        />
        <button
          className="next"
          title="Próximo"
          disabled={index === years.length - 1}
          onClick={this.handleChange(index + 1)}
        >
          <i />
        </button>
      </div>
    );
  }
}

export default PeriodField;
