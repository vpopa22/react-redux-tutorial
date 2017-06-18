import React from 'react'
import PropTypes from 'prop-types'
import '../css/Result.css'

const Result = ({ result, onClick }) => (
  <div>
    <div className ="result" key = {result.id}>
      <div className="resultImageContainer">
        <img src={result.snippet.thumbnails.default.url} alt={result.snippet.title} />
      </div>
      <div className="resultDetails">
        <div className= "resultTitle"> {result.snippet.title} </div>
        <div className= "resultChannelTitle"> {result.snippet.channelTitle} </div>
        <div className= "resultViewCount"> Views: {result.statistics.viewCount} </div>
        <div className= "resultUpvotes"> Likes: {result.statistics.likeCount} </div>
        <button className="saveResult"
          onClick={e => {
              e.preventDefault()
              alert('Added to list');
              onClick()
          }}
        >Save</button>
      </div>
      <div className="clear"></div>
    </div>
  </div>
)

Result.propTypes = {
  result: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Result
