'use strict';

function Letter({children}) {
  const style = {
    padding: 10,
    margin: 10,
    backgroundColor: '#ffde00',
    color: '#333',
    display: 'inline-block',
    fontFamily: 'Roboto, sans-serif',
    fontSize: 32,
    textAlign: 'center'
  };

  return (
    <div style={style}>
      {children}
    </div>
  )
}
