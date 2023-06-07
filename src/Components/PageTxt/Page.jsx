import React from 'react'
import './Page.scss'
const Page = (props) => {
  return (
    <div className='page_txt'>
          <span className='title'>{props.title}</span>
                <span className='desc-1'>{props.desc1}</span>
                <span className='desc-2'>{props.desc2}</span>
                <div className='line'></div>
    </div>
  )
}

export default Page