import React from "react";

const Rainbow = (WrappedComponent) => {

  const colors = ['red','pink', 'orange', 'blue', 'green', 'yello']

  const randomColors = colors[Math.floor(Math.random() * 5)]

  const classNames = randomColors + '-text'
 
  return (props) => {
    return (
        <div className={classNames}>
          <WrappedComponent {... props} />
        </div>
    )
  }


}

export default Rainbow