import React from 'react'
import { BrowserRouter as Router, Link} from 'react-router-dom'
import { NewIcon } from '..'
import { addButtonType } from './addButtonType'
import { FunctionComponent } from 'react';

const AddButton: FunctionComponent<addButtonType> = (props:addButtonType) => {
    const {path} = props
    return (
        <Router>
            <Link to={path} className='addButton'>
                <NewIcon fill="#FFFFFF"/>
            </Link>
        </Router>
    )
}

export default AddButton
