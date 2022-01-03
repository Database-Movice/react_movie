import React from 'react'
// import { Thumbnail } from 'react-bootstrap/lib'

export const URL_IMG = 'https://image.tmdb.org/t/p/';
export const IMG_SIZE_SMALL = 'w200/';
const Cast = ({ cast: { profile_path, name } }) =>
    // <Thumbnail src={URL_IMG + IMG_SIZE_SMALL + profile_path} alt={name}>
    //     <p className="caption">
    //         {name}
    //     </p>
    // </Thumbnail>
    <p className="caption">
        {name}
    </p>

export default Cast
