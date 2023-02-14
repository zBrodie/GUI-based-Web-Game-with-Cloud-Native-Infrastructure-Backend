import React, { Component } from 'react'
import Circle from './Curcle'

class Board extends Component {
    getPositionInfo = position => {
        const { zis } = this.props.G
        if (_hasZi(position, zis)) {
    return zis.find(z => euqal(z, position))
        }
    }
}
