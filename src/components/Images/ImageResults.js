import React from 'react'
import PropTypes from 'prop-types'
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import ZoomIn from 'material-ui/svg-icons/action/zoom-in';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton'

const ImageResults = ({images}) => {
  if(images) {
  return (
    <GridList
      col={3}
    >
      {images.map((image) => {
        return (
         <GridTile
          title={image.tags}
          key={image.id}
          subtitle={<span>by <strong>{image.autor}</strong></span>}
          actionIcon={<IconButton>
            <ZoomIn color="white" />
          </IconButton>}
         >
           <img src={image.largeImageURL} />
         </GridTile> 
        )
      })}
    </GridList>
  )
  } else {
    return (
      <span>Loading...</span>
    )
  }
}

ImageResults.propTypes = {
  images: PropTypes.array.isRequired
}
export default ImageResults;