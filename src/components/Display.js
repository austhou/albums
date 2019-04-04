import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';
import * as actions from '../actions';

class Display extends Component {
    constructor() {
        super();
        this.state = {
            albumX: [1,2,3],
            albumY: [1,2,3],
        }
    }
    componentWillMount() {
        this.props.getListData(this.props.listid);
    }
    openInNewTab(href) {
        Object.assign(document.createElement('a'), {
          target: '_blank',
          href,
        }).click();
    }
    returnRow(row) {
        return (
            <div className='albumGridRow' >
                {this.state.albumX.map(n => {
                    var id = (row-1)*3 + n-1;
                    var albumInfo = this.props.data.albums[id];
                    return (
                        <div key={id} className="albumHolder">
                            <div style={{position: 'absolute'}}><img onClick={this.openInNewTab.bind(this, albumInfo.inputText)} className="coverImg" src={albumInfo.info.thumbnail_url} /></div>
                        </div>
                    )
                    
                })}
            </div>
        )
    }
    returnGrid() {
        if (this.props.data.albums) {
            return (
                <div className='albumGrid' >
                    {this.state.albumY.map(n => {
                        return <div key={'row'+n}>{this.returnRow(n)}</div>
                    })}
                </div>
            )
        }
        else {
            return <div />
        }
                    
    }

    render() {
        return (
            <div className='displayHolder'>
                <div style={{width: '100%'}}>
                    <p className="textTitle">{this.props.data.title}</p>
                    <p className="textName">{this.props.data.name}</p>
                </div>
                {this.returnGrid()}
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    const displayData = state.displayData;
    return { data: displayData.data };
}

export default connect(mapStateToProps, actions)(Display);