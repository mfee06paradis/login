import React from 'react'

class HelloWorldClass extends React.Component {
  constructor() {
    super()
    this.state = {
      inputText: '',
    }
  }

  render() {
    return (
      <>
        <h1>類別型元件</h1>
        <input
          type="text"
          value={this.state.inputText}
          onChange={(event) => this.setState({ inputText: event.target.value })}
        />
        <button>送資料到App(父母元件)</button>
      </>
    )
  }
}

export default HelloWorldClass

// import React from 'react'
// import PropTypes from 'prop-types'

// class HelloWorldClass extends React.Component {
//   // 建構式如果要得到props值要用這個方式傳入
//   constructor(props) {
//     super(props)
//     // 反樣式: 不用利用傳入props值來初始化自己的狀態值
//     this.state = {}
//     console.log(props)
//   }

//   render() {
//     console.log(this.props)
//     return (
//       <>
//         <h1>類別型元件</h1>
//         父母元件傳了一個props給我: {this.props.text}
//       </>
//     )
//   }
// }

// HelloWorldClass.propTypes = {
//   text: PropTypes.string.isRequired,
//   total: PropTypes.number.isRequired,
// }

// export default HelloWorldClass
