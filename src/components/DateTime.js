import React, { useEffect, useState } from 'react'
import moment from "moment";
import { Typography } from 'antd';

const { Text } = Typography;
function DateTime() {

    const [dateTime, setDateTime] = useState()

    useEffect(() => {
        let isMounted = true;

        if (isMounted) {
            setInterval(() => {
                setDateTime(moment().format("DD MMMM HH:mm:ss"))
            }, 1000);
        }

        return () => {
            isMounted = false;
        }
    }, [])


    return (
        <Text strong
            style={{
                fontSize: 12,
                color: "#00b96b"
            }}
        >{dateTime}
        </Text>
    )
}

export default DateTime