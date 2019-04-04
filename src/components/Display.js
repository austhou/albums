import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';
import * as actions from '../actions';
import Album from './Album';
import Meta from './Meta';

class Display extends Component {
    constructor() {
        super();
        this.state = {
            albumX: [1,2,3],
            albumY: [1,2,3],
        }
    }
    componentWillMount() {
        console.log(this.props.listid)
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
            <div style={{display: 'flex', flexDirection: 'row', marginLeft: 'auto', marginRight: 'auto', width: 696}} >
                {this.state.albumX.map(n => {
                    var id = (row-1)*3 + n-1;
                    var albumInfo = this.props.data.albums[id];
                    return (
                        <div key={id} className="albumHolder" style={{width: 200, height: 200, margin: 16, backgroundColor: '#efefef'}}>
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
                <div style={{display: 'flex', flexDirection: 'column', marginLeft: 'auto', marginRight: 'auto'}} >
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
            <div style={{position: 'absolute'}}>
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
    console.log(displayData);
    return { data: displayData.data };
}

export default connect(mapStateToProps, actions)(Display);