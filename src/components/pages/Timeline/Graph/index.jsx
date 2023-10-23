// import './styled.css';

import PropTypes from 'prop-types';
import React, { Component } from 'react';

const COLOR_GRAY = 'rgb(128,128,128)';
class Graph extends Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
    this.myChart = null;
  }
  componentDidMount() {
    const { isReady, datas } = this.props;
    console.log(JSON.stringify(datas));
    if (this.canvasRef.current && isReady) {
      const ctx = this.canvasRef.current.getContext('2d');
      this.myChart = new window.Chart(ctx, {
        type: 'candlestick',
        data: {
          datasets: [
            {
              data: datas,
              borderWidth: 2,
            },
          ],
        },
        options: {
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            x: {
              grid: {
                color: COLOR_GRAY,
              },
              color: COLOR_GRAY,
            },
            y: {
              grid: {
                color: COLOR_GRAY,
              },
              position: 'right',
              color: COLOR_GRAY,
            },
          },
        },
      });
    }
  }

  componentWillUnmount() {
    if (this.myChart) {
      this.myChart.destroy();
    }
  }

  render() {
    return (
      <div className="canvasWrapper">
        {this.props.isReady && <canvas data-testid="graph" ref={this.canvasRef}></canvas>}
      </div>
    );
  }
}

Graph.propTypes = {
  isReady: PropTypes.bool,
  datas: PropTypes.array,
};
export default Graph;
