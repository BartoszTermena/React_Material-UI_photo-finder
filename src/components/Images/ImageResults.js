import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import ZoomIn from 'material-ui/svg-icons/action/zoom-in';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton'

class ImageResults extends Component {
  state = {
    open: false,
    currentImg: ''
  }
  handleClose = () => {
    this.setState({ open: false, currentImg: '' })
  }
  handleOpen = img => {
    this.setState({ open: true, currentImg: img })
  }
  render() {
    const {images} = this.props;

    const actions = [
      <FlatButton label="Close" primary={true} onClick={this.handleClose} />
    ]
    return (
      <React.Fragment>
      <GridList
        col={3}
      >
        {images.map((image) => {
          return (
          <GridTile
            title={image.tags}
            key={image.id}
            subtitle={<span>by <strong>{image.autor}</strong></span>}
            actionIcon={
              <IconButton onClick={() => this.handleOpen(image.largeImageURL)}>
                <ZoomIn color="white" />
              </IconButton>
            }
          >
            <img src={image.largeImageURL} />
          </GridTile> 
          )
        })}
      </GridList>
      <Dialog 
        actions={actions}
        modal={false}
        open={this.state.open}
        onRequestClose={this.handleClose}
      >
        <img src={this.state.currentImg} alt="" style={{width: '100%'}}/>
      </Dialog>
      </React.Fragment>
    )
  }
}

ImageResults.propTypes = {
  images: PropTypes.array.isRequired
}
export default ImageResults;