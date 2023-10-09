import './styled.css';

import React, { Component } from 'react';
class Graph extends Component {
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
                                color: 'rgb(128,128,128)',
                            },
                            color: 'rgb(128,128,128)',
                        },
                        y: {
                            grid: {
                                color: 'rgb(128,128,128)',
                            },
                            position: 'right',
                            color: 'rgb(128,128,128)',
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

export default Graph;
