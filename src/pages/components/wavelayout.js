import React from 'react'
import Styles from '../../styles/home/WaveLayout.module.scss'

export default function withWaveSection(WrappedComponent , color, bgcolor, tempId) {
    // ...and returns another component...
    return class extends React.Component {
      constructor(props) {
        super(props);
        this.state = {};
      }
  
      render() {
        return (
            <section id={tempId} className={`${Styles[bgcolor]} ${Styles.wrapper}`}>
                <WrappedComponent data={this.state.data} {...this.props} />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill={color} fillOpacity="1" d="M0,64L34.3,96C68.6,128,137,192,206,186.7C274.3,181,343,107,411,90.7C480,75,549,117,617,149.3C685.7,181,754,203,823,208C891.4,213,960,203,1029,218.7C1097.1,235,1166,277,1234,266.7C1302.9,256,1371,192,1406,160L1440,128L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z">
                    </path>
                </svg>
            </section>   
        )
      }
    };
  }