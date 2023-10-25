import './styled.css';

import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

const COLOR_GRAY = 'rgba(128,128,128,1)';
class Graph extends PureComponent {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
    this.myChart = null;
  }

  componentDidMount() {
    const { isReady, datas } = this.props;
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
        <canvas ref={this.canvasRef}></canvas>
      </div>
    );
  }
}

Graph.propTypes = {
  isReady: PropTypes.bool,
  datas: PropTypes.array,
};
export default Graph;
