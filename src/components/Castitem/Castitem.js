import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import PersonAvatar from '../../svg/person.svg';
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import SimpleLink from "../SimpleLink/SimpleLink";
const CastItem = (props) => {
    const {castName} = props;
    console.log(castName);
    return (
      castName !== undefined?(
        <SimpleLink to={`/search/${castName}`}>
          <Chip
            avatar={<Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />}
            label={castName}
            variant="outlined"
          />
      </SimpleLink>
      ):(null)
    );
};

export default CastItem;
