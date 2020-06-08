import React from 'react'
import { Link } from 'react-router-dom'

interface IProps {
  id: number
  title: string
  bg: string
}

export default ({ id, title, bg }: IProps) => (
  <div>
    <Link to={`/${id}`}>{id}</Link>  
  </div>
);