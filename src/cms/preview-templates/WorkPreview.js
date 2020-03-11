import React from 'react'
import PropTypes from 'prop-types'
import WorkTemplate from '../../components/WorkTemplate'

const WorkPreview = ({ entry, widgetFor }) => {
  return (
    <div className='container content'>
      <div className='columns'>
        <div className='column is-10 is-offset-1'>
          <WorkTemplate
            content={widgetFor('body')}
            cover={entry.getIn(['data', 'cover'])}
            meta_title={entry.getIn(['data', 'meta_title'])}
            meta_desc={entry.getIn(['data', 'meta_description'])}
            title={entry.getIn(['data', 'title'])}
            slug={entry.getIn(['data', 'slug'])}
          />
        </div>
      </div>
    </div>
  )
}

WorkPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default WorkPreview
