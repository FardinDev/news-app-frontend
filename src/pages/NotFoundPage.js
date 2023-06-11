import { Button, Result } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom';

function NotFoundPage() {
  const navigate = useNavigate();
  return (

    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you want does not exist."
      extra={<Button shape={'round'} type="primary" onClick={() => navigate('/')}>Back Home</Button>}
    />

  )
}

export default NotFoundPage