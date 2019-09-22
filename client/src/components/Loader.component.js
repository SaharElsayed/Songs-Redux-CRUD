import React from 'react';
import Loader from 'react-loader-spinner'

const Loading = () => {
    return (
        <Loader
            type="ThreeDots"
            color="#somecolor"
            height={80}
            width={80}
            visible={true}
        />
    )
}

export default Loading;