const FavButton = ({ id, email }) => {
  /*const { status, user, checkAuthToken } = useAuthStore()

  useEffect(() => {
    checkAuthToken()
  }, [status])*/
  const token = localStorage.getItem('token')
  const handleClick = () => {
    var myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')
    myHeaders.append('Authorization', 'Bearer ' + token)

    var raw = JSON.stringify({
      userEmail: email,
      productId: id,
    })

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      redirect: 'follow',
    }
    console.log(raw)
    fetch(
      'http://174.129.92.139:8001/api/v1/favorites/add?userEmail=' +
        email +
        '&productId=' +
        id,
      requestOptions,
    )
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error))
  }
  return (
    <>
      <button className='fav-button' onClick={handleClick}>
        💚
      </button>
    </>
  )
}

export default FavButton
