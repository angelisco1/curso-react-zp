const styles = {
  h2: {
    color: 'red'
  }
}

const Error = () => {
  return (
    <marquee>
      <h2 style={styles.h2}>Error 404: Page not found!</h2>
    </marquee>
  )
}

export default Error
