import React from 'react'
import { linkTagType } from './linkTagType'
import {Link, BrowserRouter as Router} from 'react-router-dom'

const LinkTag = (props: linkTagType) => {

    const {text, path} = props
    return (<Link className='link-tag' to={path}>{text}</Link>)
}

export default LinkTag
